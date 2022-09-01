import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
    root:{
        flexGrow: 1,
    },
    toolbarTitle:{
        flexGrow: 1,
    }
}));


export default function Header(){
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar
                position="static"
                color="default"
                elevation={0}
                classname={classes.appBar}
                >
                <Toolbar>
                    <Typography
                        variant="h6"
                        color="inherit"
                        className={classes.toolbarTitle}
                    >
                        Kanji Slayer
                    </Typography>
                </Toolbar>

            </AppBar>

            
        </div>
    )
}