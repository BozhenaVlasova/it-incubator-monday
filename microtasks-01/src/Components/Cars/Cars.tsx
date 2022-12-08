export const Cars = () => {
    const topCars = [
        {manufacturer: 'BMW', model: 'm5cs'},
        {manufacturer: 'Mercedes', model: 'e63s'},
        {manufacturer: 'Audi', model: 'rs6'}
    ]
    return (
        <>
            <table>
                <tbody>
                <tr>
                    <th>Manufacturer</th>
                    <th>Model</th>
                </tr>
                {topCars.map((item, index) =>
                    <tr key={index}>
                        <td>{item.manufacturer}</td>
                        <td>{item.model}</td>
                    </tr>)}
                </tbody>
            </table>
        </>
    )
}