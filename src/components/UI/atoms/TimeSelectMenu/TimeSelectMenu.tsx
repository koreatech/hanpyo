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
  menuLabel: string;
  dropMenuWidth?: number | string;
  onSelectMenuChange: () => void;
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

const TimeSelectMenu = ({ menuLabel, dropMenuWidth = 'auto', onSelectMenuChange }: TimeSelectMenuProps): JSX.Element => {
  const [anchorEl, setAnchorEl] = React.useState<Element | null>(null);
  const [isSelected, setIsSelected] = useState(false);
  const [selectedAMPM, setSelectedAMPM] = useState('오전');
  const [selectedHour, setSelectedHour] = useState('01');
  const [selectedMinute, setSelectedMinute] = useState('00');

  const selectedValue = `${selectedAMPM}${selectedHour && `  ${selectedHour} : `}${selectedMinute}`;

  const open = Boolean(anchorEl);
  const classes = useStyles({ open, dropMenuWidth });

  const isSelectedMenuItem = (value: string) => {
    return value === selectedAMPM || value === selectedHour || value === selectedMinute;
  };

  const getMenuItems = (menuItemDatas: TimeSelectMenuDataType[]): JSX.Element[] => {
    const menuItems = menuItemDatas.map((menuItemData) => (
      <li
        key={menuItemData.id}
        data-value={menuItemData.value}
        data-title={menuItemData.title}
        data-type={menuItemData.type}
        data-selected={isSelectedMenuItem(menuItemData.title)}
        onClick={onMenuClickListener}>
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
    setIsSelected(true);
  };

  const onMenuCloseListener = () => {
    setAnchorEl(null);
  };

  const onMenuClickListener = (event: React.MouseEvent<HTMLElement>) => {
    const target = event.target as HTMLElement;
    const liElement = target.closest('li');

    if (!liElement) return;

    const { dataset } = liElement;
    const { type, title } = dataset;

    if (type === TimeSelectMenuItemType.AM_PM) setSelectedAMPM(title ?? '');
    if (type === TimeSelectMenuItemType.HOUR) {
      setSelectedHour(title ?? '');
    }
    if (type === TimeSelectMenuItemType.MINUTE) setSelectedMinute(title ?? '');

    if (onSelectMenuChange) {
      onSelectMenuChange();
    }
  };

  return (
    <>
      <div className={classes.root} onClick={onMenuBoxClickListener}>
        <span className={classes.label}>{isSelected ? selectedValue : menuLabel}</span>
        <input type="hidden" aria-hidden="true" value={selectedValue} />
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
