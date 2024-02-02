import React, { useState } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Popover } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { range } from '@/common/utils';
import { calculateScrollHeight, scrollDownToBottom } from '@/common/utils/scroll';

enum TimeSelectMenuItemType {
  AM_PM = 'AM_PM',
  HOUR = 'HOUR',
  MINUTE = 'MINUTE',
}

interface TimeSelectMenuDataType {
  id: number;
  title: string;
  value: number | string;
  type: TimeSelectMenuItemType;
}

interface TimeSelectMenuProps {
  selected: boolean;
  value: string;
  selectType: string;
  menuLabel: string;
  dropMenuWidth?: number | string;
  onMenuClick: (e: React.MouseEvent<HTMLLIElement>) => void;
  checkSelectedItem: (itemValue: string) => boolean;
}

interface cssProps {
  open: boolean;
  dropMenuWidth: number | string;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: ({ open }: cssProps) => ({
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      position: 'relative',
      height: '1.25rem',
      padding: '0.34375rem 0.45625rem 0.3125rem 0.6875rem',
      border: `1px solid ${open ? theme.palette.primary.main : theme.palette.grey[300]}`,
      borderRadius: '0.7rem',
      cursor: 'pointer',
    }),

    label: ({ open }: cssProps) => ({
      color: open ? theme.palette.primary.main : theme.palette.grey[800],
      fontSize: '0.75rem',
    }),

    icon: ({ open }: cssProps) => ({
      color: open ? theme.palette.primary.main : theme.palette.grey[300],
    }),

    popOver: ({ dropMenuWidth }: cssProps) => ({
      '& .MuiPaper-root': {
        width: dropMenuWidth,
        border: `1px solid ${theme.palette.primary.main}`,
        borderRadius: '0.7rem',
      },
    }),

    popOverMenu: {
      display: 'flex',
      justifyContent: 'space-between',

      '& ul': {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        overflow: 'hidden',

        '& li': {
          width: '1.875rem',
          padding: '0.3125rem 0',
          borderRadius: '0.1875rem',
          color: theme.palette.primary.main,
          fontSize: '0.75rem',
          textAlign: 'center',
          cursor: 'pointer',

          '&:hover, &[data-selected=true]': {
            color: '#ffffff',
            backgroundColor: theme.palette.primary.main,
          },

          '&:hover': {
            opacity: 0.6,
          },
        },
      },
    },
  }),
);

const AM_PM_DATAS = [
  { id: 0, title: '오전', value: 'am', type: TimeSelectMenuItemType.AM_PM },
  { id: 1, title: '오후', value: 'pm', type: TimeSelectMenuItemType.AM_PM },
];

const HOUR_DATAS = Array.from(range(1, 12)).map((hour, idx) => ({
  id: idx,
  title: hour < 10 ? `0${hour}` : `${hour}`,
  value: hour,
  type: TimeSelectMenuItemType.HOUR,
}));

const MINUTE_DATAS = Array.from(range(0, 30, 30)).map((minute, idx) => ({
  id: idx,
  title: minute < 10 ? `0${minute}` : `${minute}`,
  value: minute,
  type: TimeSelectMenuItemType.MINUTE,
}));

const TimeSelectMenu = ({
  selected,
  selectType,
  value,
  menuLabel,
  dropMenuWidth = 'auto',
  checkSelectedItem,
  onMenuClick,
}: TimeSelectMenuProps): JSX.Element => {
  const [anchorEl, setAnchorEl] = useState<Element | null>(null);
  const open = Boolean(anchorEl);

  const classes = useStyles({ open, dropMenuWidth });

  const getMenuItems = (menuItemDatas: TimeSelectMenuDataType[]): JSX.Element[] => {
    const menuItems = menuItemDatas.map((menuItemData) => (
      <li
        key={menuItemData.id}
        data-value={menuItemData.value}
        data-title={menuItemData.title}
        data-type={menuItemData.type}
        data-selected={checkSelectedItem(menuItemData.title)}
        data-selectType={selectType}
        onClick={onMenuClick}>
        <span>{menuItemData.title}</span>
      </li>
    ));

    return menuItems;
  };

  const scrollDown = (eventTarget: HTMLElement) => {
    const scrollHeight = calculateScrollHeight();
    const middleScrollHeight = scrollHeight / 2;

    if (eventTarget.offsetTop >= middleScrollHeight) {
      scrollDownToBottom();
    }
  };

  const onMenuBoxClickListener = (event: React.MouseEvent<HTMLElement>) => {
    const eventTarget = event.currentTarget;

    scrollDown(eventTarget);
    setAnchorEl(eventTarget);
  };

  const onMenuCloseListener = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <div className={classes.root} onClick={onMenuBoxClickListener}>
        <span className={classes.label}>{selected ? value : menuLabel}</span>
        <input type="hidden" aria-hidden="true" value={value} />
        <ExpandMoreIcon className={classes.icon} />
      </div>
      <Popover
        className={classes.popOver}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        elevation={2}
        onClose={onMenuCloseListener}>
        <div className={classes.popOverMenu}>
          <ul>{getMenuItems(AM_PM_DATAS)}</ul>
          <ul>{getMenuItems(HOUR_DATAS)}</ul>
          <ul>{getMenuItems(MINUTE_DATAS)}</ul>
        </div>
      </Popover>
    </>
  );
};

export { TimeSelectMenu };
export type { TimeSelectMenuProps };
