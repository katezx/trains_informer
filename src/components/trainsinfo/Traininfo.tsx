import React from "react";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Traininfo = ()=>{
    return(
        <div className="tableview">
        <table className="table_style">
          <thead>
              <th scope="col">Характеристики <br>
              </br></th>
          </thead>
          <tbody>
          <tr className="greyfragment">
              <td> Ток двигателя</td>
              <td>Сила тяги</td>
              <td>Скорость</td>
          </tr>
          <tr>
              <td>Поезд №0</td>
              <td>Описание 0</td>
          </tr>
          </tbody>
          </table>  
      </div>  
    )
}