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

var hours = 0;
var minutes = 0;
var hoursPrice = 0;
var result = 0;

function calculator()
{
  console.log('hours : ' + hours); 
  console.log('minutes : ' + minutes);
  console.log('prix par heures : ' + hoursPrice); 
  result = (hours * 60 + minutes) * (hoursPrice / 60) / 100
  console.log('result : ' + result);
  
}

export default function ComposedTextField() {
  const [labelWidth, setLabelWidth] = React.useState(0);
  const labelRef = React.useRef(null);
  const classes = useStyles();

  React.useEffect(() => {
    setLabelWidth(labelRef.current.offsetWidth);
  }, []);

  const handleChangeHours = (event) => {
    hours = event.target.value

  };
  const handleChangeMinutes = (event) => {
    minutes = event.target.value
  };
  const handleChangeHoursPrice = (event) => {
    hoursPrice = event.target.value

  };
  return (
    <div className={classes.container}>
      <FormControl className={classes.formControl} variant="outlined">
        <InputLabel ref={labelRef} htmlFor="component-outlined">
       Nombre d'heures
        </InputLabel>
        <OutlinedInput
          id="component-outlined"
          onChange={handleChangeHours}
          labelWidth={labelWidth}
        />
      </FormControl>

      <FormControl className={classes.formControl} variant="outlined">
        <InputLabel ref={labelRef} htmlFor="component-outlined">
        Nombre de minutes
        </InputLabel>
        <OutlinedInput
          id="component-outlined"
          onChange={handleChangeMinutes}
          labelWidth={labelWidth}
        />
      </FormControl>

      <FormControl className={classes.formControl} variant="outlined">
        <InputLabel ref={labelRef} htmlFor="component-outlined">
        Prix par heures
        </InputLabel>
        <OutlinedInput
          id="component-outlined"
          onChange={handleChangeHoursPrice}
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