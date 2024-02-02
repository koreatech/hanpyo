import React, { useState } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Popover } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { calculateScrollHeight, scrollDownToBottom } from '@/common/utils/scroll';

interface MenuItemType {
  id: number;
  value: string | number;
  title: string;
}

interface SelectMenuProps {
  value: string;
  type: string;
  menuLabel: string;
  menus: MenuItemType[];
  dropMenuWidth?: number | string;
  onMenuClick: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
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
    popOver: ({ dropMenuWidth }) => ({
      '& .MuiPaper-root': {
        width: dropMenuWidth,
        border: `1px solid ${theme.palette.primary.main}`,
        borderRadius: '0.7rem',
      },
      '& ul': {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        overflow: 'hidden',
        '& li': {
          width: '100%',
          padding: '0.3125rem 0',
          borderRadius: '0.5rem',
          color: theme.palette.primary.main,
          fontSize: '0.75rem',
          textAlign: 'center',
          cursor: 'pointer',
          '&:hover': {
            color: '#ffffff',
            backgroundColor: theme.palette.primary.main,
          },
        },
      },
    }),
  }),
);

const SelectMenu = ({ value, type, menuLabel, menus, dropMenuWidth = 'auto', onMenuClick }: SelectMenuProps): JSX.Element => {
  const [anchorEl, setAnchorEl] = useState<Element | null>(null);
  const open = Boolean(anchorEl);
  const classes = useStyles({ open, dropMenuWidth });

  const getMenuItems = (): JSX.Element[] => {
    const menuItems = menus.map((menu) => (
      <li key={menu.id} data-value={menu.value} data-title={menu.title} data-type={type} onClick={onMenuClickListener}>
        <span>{menu.title}</span>
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

  const onMenuClickListener = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    onMenuClick(e);
    setAnchorEl(null);
  };

  return (
    <>
      <div className={classes.root} onClick={onMenuBoxClickListener}>
        <span className={classes.label}>{value || menuLabel}</span>
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
        <ul>{getMenuItems()}</ul>
      </Popover>
    </>
  );
};

export { SelectMenu };
export type { SelectMenuProps };
