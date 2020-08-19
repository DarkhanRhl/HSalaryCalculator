import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing(1),
  },

  button: {
    margin: theme.spacing(1),
    padding : "14px"
  },

}));

function calculator()
{
  console.log('onClick'); 
}

export default function ComposedTextField() {
  const [labelWidth, setLabelWidth] = React.useState(0);
  const labelRef = React.useRef(null);
  const [name, setName] = React.useState('Composed TextField');
  const classes = useStyles();
  const hours = React.useState(0)

  React.useEffect(() => {
    setLabelWidth(labelRef.current.offsetWidth);
  }, []);

  const handleChange = (event) => {
    setName(event.target.value);
    setHours(event.trget.hours)
  };
  return (
    <div className={classes.container}>
      <FormControl className={classes.formControl} variant="outlined">
        <InputLabel ref={labelRef} htmlFor="component-outlined">
       Nombre d'heures
        </InputLabel>
        <OutlinedInput
          id="component-outlined"
          onChange={handleChange}
          labelWidth={labelWidth}
        />
      </FormControl>

      <FormControl className={classes.formControl} variant="outlined">
        <InputLabel ref={labelRef} htmlFor="component-outlined">
        Nombre de minutes
        </InputLabel>
        <OutlinedInput
          id="component-outlined"
          onChange={handleChange}
          labelWidth={labelWidth}
        />
      </FormControl>

      <FormControl className={classes.formControl} variant="outlined">
        <InputLabel ref={labelRef} htmlFor="component-outlined">
        Prix par heures
        </InputLabel>
        <OutlinedInput
          id="component-outlined"
          onChange={handleChange}
          labelWidth={labelWidth}
        />
      </FormControl>

      <div>
        <Button variant="outlined" size="large" color="primary" className={classes.button}
        onClick={
          () => { calculator()}
        }>
          Calcul
        </Button>
      </div>
    </div>
  );
}