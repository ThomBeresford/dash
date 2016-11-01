import React from 'react';
import Calendar from 'components/Calendar';
import Seperator from 'components/seperator';
import IconSeperator from 'components/iconseperator';
import Card from 'components/card';
import Clock from 'components/clock';
import WeatherCard from 'components/weathercard';
import Iconbay from 'components/iconbay';
import Trash from 'components/trash';
import ShoppingList from 'components/ShoppingList';

import style from './dashboard.less';

const Dashboard = () => (
  <div className={style.container}>
    <div className={style.rowseperator} />
    <div className={style.row}>
      <Card />
      <Seperator />
      <Card>
        <Clock />
      </Card>
    </div>
    <div className={style.rowseperator} />
    <ShoppingList />
    <Calendar />
    <div className={style.rowtwo}>
      <WeatherCard />
      <div className={style.iconcontainer}>
        <div className={style.iconrow}>
          <Iconbay>
            <Trash />
          </Iconbay>
          <IconSeperator />
          <Iconbay />
          <IconSeperator />
          <Iconbay />
          <IconSeperator />
        </div>
        <div className={style.iconrow}>
          <Iconbay />
          <IconSeperator />
          <Iconbay />
          <IconSeperator />
          <Iconbay />
          <IconSeperator />
        </div>
      </div>
    </div>
  </div>
);

export default Dashboard;
