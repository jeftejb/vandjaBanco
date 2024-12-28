"use client"
import React from 'react'
import CountUp from 'react-countup'

function AnimatedCounter({amount}:{amount:number}) {
  return (
    <span className='w-full'>
    <CountUp
    decimals={2}
    decimal=','
    prefix='Akz'
    end={amount}
    />
    </span>
  )
}

export default AnimatedCounter