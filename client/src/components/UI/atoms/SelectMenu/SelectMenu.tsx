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
  value: any;
  title: string;
}

interface SelectMenuProps {
  menuLabel: string;
  menus: MenuItemType[];
  onSelectMenuChange: () => void;
}

interface cssProps {
  open: boolean;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: ({ open }: cssProps) => ({
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      position: 'relative',
      height: 20,
      padding: '5.5px 7.3px 5px 11px',
      border: `1px solid ${open ? theme.palette.primary.main : theme.palette.grey[300]}`,
      borderRadius: 5,
      cursor: 'pointer',
    }),
    label: ({ open }: cssProps) => ({
      color: open ? theme.palette.primary.main : theme.palette.grey[800],
      fontSize: '7.5px',
    }),
    icon: ({ open }: cssProps) => ({
      color: open ? theme.palette.primary.main : theme.palette.grey[300],
    }),
    popOver: {
      '& .MuiPaper-root': {
        top: '51px !important',
        width: '138px',
        border: `1px solid ${theme.palette.primary.main}`,
        borderRadius: 5,
      },
      '& ul': {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '0px 3px',
        overflow: 'hidden',
        '& li': {
          width: '100%',
          padding: '5px 0px',
          borderRadius: '8px',
          color: theme.palette.primary.main,
          fontSize: '5.5px',
          textAlign: 'center',
          cursor: 'pointer',
          '&:hover': {
            color: '#ffffff',
            backgroundColor: theme.palette.primary.main,
          },
        },
      },
    },
  }),
);

const SelectMenu = ({ menuLabel, menus, onSelectMenuChange }: SelectMenuProps): JSX.Element => {
  const [anchorEl, setAnchorEl] = React.useState<Element | null>(null);
  const [selectValue, setSelectValue] = useState('');

  const open = Boolean(anchorEl);
  const classes = useStyles({ open });

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
    const liElement = event.target.closest('li');
    setSelectValue(liElement.dataset?.title);
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
        <input type="hidden" aria-hidden="true" value="" />
        <ExpandMoreIcon className={classes.icon} />
      </div>
      <Popover
        className={classes.popOver}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        elevation={0}
        onClose={onMenuCloseListener}>
        <ul>{getMenuItems()}</ul>
      </Popover>
    </>
  );
};

export { SelectMenu };
export type { SelectMenuProps };
