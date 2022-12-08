import {BanknotsType} from "./Money";

type filterArrayType = {
    filterArray: MoneyArrayType[]
    setName: (value: BanknotsType)=> void
}

type MoneyArrayType = {
    banknots: string,
    value: number,
    number: string
}

export const MoneyComponent = (props: filterArrayType) => {
      return (
        <>
            <table>
                <tbody>
                <tr>
                    <th>Banknots</th>
                    <th>Value</th>
                    <th>Number</th>
                </tr>
                {props.filterArray.map((item, index) =>
                    <tr key={index}>
                        <td>{item.banknots}</td>
                        <td>{item.value}</td>
                        <td>{item.number}</td>
                    </tr>)}
                </tbody>
            </table>
            <div>
                <button onClick={() => props.setName('all')}>All</button>
                <button onClick={() => props.setName('dollars')}>Dollars</button>
                <button onClick={() => props.setName('rubls')}>RUBLS</button>
            </div>

        </>
    )
}