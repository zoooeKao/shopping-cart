import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import * as React from 'react';

function valuetext(value) {
  return `${value}°C`;
}

const minDistance = 10;

/** @param {Object} param0
 * @param {number} param0.minPrice
 * @param {number} param0.maxPrice
 * @param {(param:number)=>void} param0.getMinPrice
 * @returns
 */
export function MinimumDistanceSlider({minPrice, maxPrice, getMinPrice}) {
  const [value1, setValue1] = React.useState([20, 37]);

  // const handleChange1 = (event, newValue, activeThumb) => {
  //   if (!Array.isArray(newValue)) {
  //     return;
  //   }

  //   if (activeThumb === 0) {
  //     setValue1([Math.min(newValue[0], value1[1] - minDistance), value1[1]]);
  //   } else {
  //     setValue1([value1[0], Math.max(newValue[1], value1[0] + minDistance)]);
  //   }
  // };

  const [value2, setValue2] = React.useState([minPrice, maxPrice]);

  const handleChange2 = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (newValue[1] - newValue[0] < minDistance) {
      if (activeThumb === 0) {
        const clamped = Math.min(newValue[0], 100 - minDistance);
        setValue2([clamped, clamped + minDistance]);
      } else {
        const clamped = Math.max(newValue[1], minDistance);
        setValue2([clamped - minDistance, clamped]);
      }
    } else {
      setValue2(newValue);
    }
  };

  return (
    <Box sx={{width: 300}}>
      {/* <Slider getAriaLabel={() => 'Minimum distance'} value={value1} onChange={handleChange1} valueLabelDisplay='auto' getAriaValueText={valuetext} disableSwap /> */}
      <Slider
        sx={{color: '#07BFA5'}}
        getAriaLabel={() => 'Minimum distance shift'}
        value={value2}
        onChange={() => {
          // console.log('go onChange');
          getMinPrice(minPrice);
          handleChange2();
        }}
        valueLabelDisplay='auto'
        getAriaValueText={valuetext}
        disableSwap
      />
    </Box>
  );
}
