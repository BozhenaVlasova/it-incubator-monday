import {useState} from "react";
import {MoneyComponent} from "./MoneyComponent";

export type BanknotsType = 'all' | 'dollars' | 'rubls'

export const Money = () => {
    const [money, setMoney] = useState([
        {banknots: 'Dollars', value: 100, number: ' a1234567890'},
        {banknots: 'Dollars', value: 50, number: ' z1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' w1234567890'},
        {banknots: 'Dollars', value: 100, number: ' e1234567890'},
        {banknots: 'Dollars', value: 50, number: ' c1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' r1234567890'},
        {banknots: 'Dollars', value: 50, number: ' x1234567890'},
        {banknots: 'RUBLS', value: 50, number: ' v1234567890'},
    ])

    const [nameOfMoney, setNameOfMoney] = useState<BanknotsType>('all')

    let filterArr = money;
    if (nameOfMoney === 'dollars') {
        filterArr = money.filter(item => item.banknots === 'Dollars');
    }
    if (nameOfMoney === 'rubls') {
        filterArr = money.filter(item => item.banknots === 'RUBLS');
    }

    return (
        <MoneyComponent filterArray={filterArr} setName={setNameOfMoney}/>
    )
}