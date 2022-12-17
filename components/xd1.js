import Dropdown from 'react-dropdown';
import * as React from 'react';
import 'react-dropdown/style.css';
import { OrdenFiltro } from './ordenfiltro';

const xd1 = (datable) => {
    const [Filtro, setFiltro] = React.useState('Filtro');
    const ordenChange = (event) => {
        setFiltro(OrdenFiltro(Filtro,datable));
    };
    return (
    <div>
        <Dropdown
            label="Filtro"
            options={[
                { label: 'Ascendente', value: 'ascendente' },
                { label: 'Descendente', value: 'descendente' },
                { label: 'Codigo', value: 'codigo' },
            ]}
            value={Filtro}
            onChange={ordenChange}
        />
        
    </div>
    );
};
export default xd1;