import React from "react";
import logo from "../assets/logo.png"
import {alpha, styled} from '@mui/material/styles';
import {AppBar, Box, IconButton, InputBase, Toolbar, Typography} from "@mui/material";
// icons
import {
    AppsOutlined as AppsOutlinedIcon,
    DnsOutlined as DnsOutlinedIcon,
    Menu as MenuIcon,
    RefreshOutlined as RefreshOutlinedIcon,
    Search as SearchIcon,
    SettingsOutlined as SettingsOutlinedIcon
} from '@mui/icons-material';


const Search = styled('div')(({theme}) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.black, 0.15),
    transition: "all 0.2s ease",
    marginLeft: 0,
    width: '100%',
    '&:hover': {backgroundColor: alpha(theme.palette.common.white, 0.25), boxShadow: theme.shadows[1]},
    [theme.breakpoints.up('sm')]: {marginLeft: theme.spacing(8), width: 'auto',},
    [theme.breakpoints.down('lg')]: {display: 'none'},
}));

const SearchIconWrapper = styled('div')(({theme}) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    [theme.breakpoints.down('lg')]: {display: 'block'},
}));

const StyledInputBase = styled(InputBase)(({theme}) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '50ch',
    },
}));

const IconContainer = styled('div')(({theme}) => ({
    marginLeft: "auto", width: 250, display: "flex",
    [theme.breakpoints.down('sm')]: {
        width: 'auto'
    },
}));

const IconBox = styled('Box')(({theme}) => ({
    width: "100%",
    padding: 0,
    '&:nth-child(1), &:nth-child(2), &:nth-child(3)': {
        [theme.breakpoints.down('lg')]: {width: 'auto'},
    },
    '&:nth-child(1), &:nth-child(2)': {
        [theme.breakpoints.down('sm')]: {display: 'none'},
    },
    '&:nth-child(1)': {
        [theme.breakpoints.up('lg')]: {display: "none",},
        [theme.breakpoints.down('lg')]: {display: "block",},
        [theme.breakpoints.down('sm')]: {display: "none",},
    },
}));

const ProfileBtnStyle = {backgroundColor: "green", color: "#fff", borderRadius: "50%", py: .7, px: 1.6};


export default function NavBar() {
    return (
        <React.Fragment>
            <AppBar color="inherit" position="fixed" sx={{zIndex: (theme) => theme.zIndex.drawer + 1}}>
                <Toolbar>
                    <IconButton><MenuIcon/></IconButton>
                    <Box component={"img"} src={logo}/>
                    <Typography variant="h6" noWrap component="div">Keep</Typography>
                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon/>
                        </SearchIconWrapper>
                        <StyledInputBase placeholder="Search…" inputProps={{'aria-label': 'search'}}/>
                    </Search>
                    <IconContainer>
                        <IconBox>
                            <IconButton><SearchIcon/></IconButton>
                        </IconBox>
                        <IconBox>
                            <IconButton><RefreshOutlinedIcon/></IconButton>
                            <IconButton><DnsOutlinedIcon/></IconButton>
                            <IconButton><SettingsOutlinedIcon/></IconButton>
                        </IconBox>
                        <IconBox>
                            <IconButton><AppsOutlinedIcon/></IconButton>
                            <IconButton size={"small"} variant={"outlined"} sx={ProfileBtnStyle}>
                                <Typography>S</Typography>
                            </IconButton>
                        </IconBox>
                    </IconContainer>
                </Toolbar>
            </AppBar>
        </React.Fragment>
    )
}
