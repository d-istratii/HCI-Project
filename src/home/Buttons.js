import {Button, makeStyles} from "@material-ui/core";
import React from "react";

const useStylesSubmit = makeStyles({
    root: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        color: 'white',
    },
});

function SubmitButton(props) {
    const classes = useStylesSubmit();

    return (
        <Button
            classes={{
                root: classes.root, // class name, e.g. `classes-nesting-root-x`
                label: classes.label, // class name, e.g. `classes-nesting-label-x`
            }} onClick={() => props.clickHandler()}>
            Report Trash
        </Button>
    );
}

export default SubmitButton