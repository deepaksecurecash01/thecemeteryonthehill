import PlotTable from '@/components/PurchasePlot/PlotTable';
import PopupForm from '@/components/PurchasePlot/PopupForm';
import Table from '@/components/PurchasePlot/Table';
import React from 'react'

const page = () => {
  return (
    <div className="flex flex-col justify-start  items-center my-5 overflow-hidden">
      <h2 className="text-[1.75rem] md:text-[2.75rem] font-bold text-primary font-display">
        Purchase a Plot
      </h2>
      <PlotTable />
      <PopupForm />
    </div>
  );
}

export default page