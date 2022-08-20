import React from 'react';

import Select from 'react-select';
import { indicatorOptions } from '../data/indicator';

export function MultiSelection({ options, value, changeHandler }) {
    return (
        <Select
            // defaultValue={[indicatorOptions[2], indicatorOptions[3]]}
            isMulti
            name="colors"
            options={indicatorOptions}
            className="basic-multi-select"
            classNamePrefix="select"
        />
    );
}