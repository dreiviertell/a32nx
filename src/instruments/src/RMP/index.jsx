/*
 * A32NX
 * Copyright (C) 2020-2021 FlyByWire Simulations and its contributors
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

import ReactDOM from 'react-dom';
import { renderTarget } from '../util.js';
import './style.scss';

import { StatefulSimVar } from './Framework/StatefulSimVar.mjs';
import { RadioManagementPanel } from './Components/RadioManagementPanel.jsx';

function RootInstrumentDisplay() {
    const lightsTestStatefulSimVar = new StatefulSimVar({
        simVarGetter: 'L:XMLVAR_LTS_Test',
        simVarUnit: 'Bool',
        refreshRate: 250,
    });

    return (
        <div className="rmp-wrapper">
            <RadioManagementPanel side="L" lightsTest={lightsTestStatefulSimVar.value} />
            <RadioManagementPanel side="R" lightsTest={lightsTestStatefulSimVar.value} />
        </div>
    );
}

ReactDOM.render(<RootInstrumentDisplay />, renderTarget);