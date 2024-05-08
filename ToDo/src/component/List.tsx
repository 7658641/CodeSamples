import React from 'react'
import planet1 from '../asset/planet2.png';
import planet2 from '../asset/planet3.png';
import planet3 from '../asset/planet4.png';

import styled from 'styled-components'

export default function List() {
  return (
    <div>
        <ListWrapper>
        <img src={planet1} alt="행성이미지1" />
        <img src={planet2} alt="행성이미지2" />
        <img src={planet3} alt="행성이미지3" style={{width:'500px'}} />

        </ListWrapper>
    </div>

  )
}

const ListWrapper = styled.div`

`