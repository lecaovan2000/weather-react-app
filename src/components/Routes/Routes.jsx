import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Forecast from '../Forecast';
import GioiThieu from '../Page/gioithieu/GioiThieu';
import MoHinh from '../Page/mohinh/MoHinh';
import ThietBi from '../Page/thietbi/ThietBi';

import SensorBui from '../Page/detailSensor/SensorBui';

const Routes = () => {
    return (
        <Switch>
            <Route path="/" exact component={Forecast} />
            <Route path="/gioithieu" component={GioiThieu} />
            <Route path="/mohinh" component={MoHinh} />
            <Route path="/thietbi" component={ThietBi} />
            <Route path="/bui_pm10" component={SensorBui} />
        </Switch>
    );
};

export default Routes;
