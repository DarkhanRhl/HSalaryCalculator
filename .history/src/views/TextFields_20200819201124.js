import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import Button from '@material-ui/core/Button';
import { Card, CardBody, CardTitle, Container, Row, Col } from "reactstrap";


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
    result = 1

  };
  const handleChangeMinutes = (event) => {
    minutes = event.target.value
    result = 1

  };
  const handleChangeHoursPrice = (event) => {
    hoursPrice = event.target.value
    result = 1


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
          () => { this.result = calculator()}
        }>
          Calcul
        </Button>
      </div>

      <Card className="card-stats mb-4 mb-xl-0">
        <CardBody>
          <Row>
            <div className="col">
              <CardTitle
                tag="h5"
                className="text-uppercase text-muted mb-0"
              >
                Total
              </CardTitle>
              <span className="h2 font-weight-bold mb-0">
                {result}
              </span>
            </div>
            <Col className="col-auto">
              <div className="icon icon-shape bg-info text-white rounded-circle shadow">
                <i className="fa fa-euro-sign"/>
              </div>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </div>
  );
}