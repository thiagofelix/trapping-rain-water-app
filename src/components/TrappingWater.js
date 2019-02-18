import React, { Component } from 'react';

export default function TrappingWater({ elevation = [] }) {
  const style = {
    display: 'flex',
    alignItems: 'flex-end',
  };

  const water = elevation.map((elevation, index, list) => {
    if (index == 0 || index === list.length -1) {
      return 0
    }

    const leftWall = list.slice(0, index).reduce((a,b) => Math.max(a,b))
    const rightWall = list.slice(index).reduce((a,b) => Math.max(a,b))
    const maxWater = Math.min(leftWall, rightWall)
    return Math.max(maxWater - elevation, 0);
  })

  const total = water.reduce((a,b) => a+b)

  const data = elevation.map((level, idx) => ({
    ground: Array.from({length: level}, (value, key) => key),
    water: Array.from({length: water[idx]}, (value, key) => key)
  }));

  const block = {
    width: 80,
    height: 80,
    border: '1px solid white'
  }

  return (
    <React.Fragment>
      <div style={{ marginTop: 10, marginBottom: 10, fontSize: 22, textAlign: 'center' }}>{total}</div>
      <div style={style}>
        { data.map(({ ground, water }, i) => (
          <div key={`column-${i}`} className='column'>
            { water.map(( value, idx ) =>
              <div key={`water-${i}-${idx}`} style={{...block, backgroundColor: '#5583b9'}} className='water' />
            )}
            { ground.map(( value, idx ) =>
              <div key={`ground-${i}-${idx}`} style={{...block, backgroundColor: '#000'}} className='ground' />
            )}
          </div>
        )) }
      </div>
    </React.Fragment>
  )
};

