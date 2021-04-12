/* eslint-disable no-param-reassign */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/jsx-closing-bracket-location */
import React, { useState } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Box, Popover } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

interface MenuItemType {
  id: number;
  value: string | number;
  title: string;
}

interface SelectMenuProps {
  menuLabel: string;
  menus: MenuItemType[];
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

const SelectMenu = ({ menuLabel, menus, dropMenuWidth = 'auto', onSelectMenuChange }: SelectMenuProps): JSX.Element => {
  const [anchorEl, setAnchorEl] = useState<Element | null>(null);
  const [selectValue, setSelectValue] = useState('');

  const open = Boolean(anchorEl);
  const classes = useStyles({ open, dropMenuWidth });

  const getMenuItems = (): JSX.Element[] => {
    const menuItems = menus.map((menu) => (
      <li key={menu.id} data-value={menu.value} data-title={menu.title} onClick={onMenuClickListener}>
        <span>{menu.title}</span>
      </li>
    ));

    return menuItems;
  };

  const onMenuBoxClickListener = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const onMenuCloseListener = () => {
    setAnchorEl(null);
  };

  const onMenuClickListener = (event: React.MouseEvent<HTMLElement>) => {
    const target = event.target as HTMLElement;
    const liElement = target.closest('li');

    if (!liElement) return;

    const { dataset } = liElement;
    setSelectValue(dataset?.title ?? '');
    setAnchorEl(null);

    if (onSelectMenuChange) {
      onSelectMenuChange();
    }
  };

  return (
    <>
      <div className={classes.root} onClick={onMenuBoxClickListener}>
        <Box className={classes.label} component="span">
          {selectValue || menuLabel}
        </Box>
        <input type="hidden" aria-hidden="true" value={selectValue} />
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
