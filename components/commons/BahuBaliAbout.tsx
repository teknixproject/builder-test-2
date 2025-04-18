
/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import _ from "lodash";
import { getDeviceType } from '@/lib/utils';
import { CSSProperties } from "react";
import { cn } from "@/lib/utils"; 
import { useData } from '@/hooks';
import { GridItem } from '@/types/gridItem';
import { useSelector } from 'react-redux';
import { Icon } from '@iconify/react/dist/iconify.js';

interface YourNameComponentProps {
  data?: GridItem;
  style?: CSSProperties;
}

const YourNameComponent = ({ data, style }: YourNameComponentProps) => {
  const title = _.get(data, "title", "Title Header");

  const newStyle: CSSProperties = {
    ...style,
  };

  return (
    <div
      style={newStyle}
      className="text-[#858585]"
    >
      {title} BahuBali
    </div>
  );
};

export default YourNameComponent;