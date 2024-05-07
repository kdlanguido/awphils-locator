"use client"

import React from 'react'
import RegionSelect from "@/components/RegionSelect/RegionSelect";
import FindClubsButton from "@/components/FindClubsButton/FindClubsButton";

const TeamFinder = () => {
  return (
    <div className="flex mb-5 gap-2 xl:w-5/12 w-full">
      <RegionSelect />
      <FindClubsButton />
    </div>
  )
}

export default TeamFinder