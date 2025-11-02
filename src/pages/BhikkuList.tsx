import React, { useState } from 'react';
import { Sidebar } from '../components/Sidebar';
import { TopBar } from '../components/TopBar';
import { DataTable } from '../components/DataTable';
import { PlusIcon } from 'lucide-react';
import { FooterBar } from '../components/FooterBar';
const sampleData = [{
  regNo: 'BH2025000003',
  name: 'විමලසේන',
  fatherName: 'පී.ඩී. විමලසේන',
  mobile: '0712911001',
  email: 'kollonnawa@temple.lk',
  mahanayaka: 'පුස්ස දෙවාලාත්තොවාව මහා නායක ස්ථානය',
  remarks: 'කැළණිය විහාරාධිපති',
  category: 'CAT01',
  status: 'ST03'
}, {
  regNo: 'BH2025000004',
  name: 'රත්නසිරි',
  fatherName: 'ඒ.එම්. රත්නසිරි',
  mobile: '0712784001',
  email: 'bellanwila.vimalarathana@temple.lk',
  mahanayaka: 'පුස්ස දෙවාලාත්තොවාව මහා නායක ස්ථානය',
  remarks: 'බෙල්ලන්විල විහාරාධිපති',
  category: 'CAT01',
  status: 'ST03'
}, {
  regNo: 'BH2025000005',
  name: 'ධම්මාල',
  fatherName: 'කේ.ඒ.ජී. ධම්මාල',
  mobile: '0812234001',
  email: 'diyalagama@temple.lk',
  mahanayaka: 'පුස්ස දියලගම අතිරේක මහා නායක ස්ථානය',
  remarks: 'දියල මැදිරිය විහාරාධිපති',
  category: 'CAT01',
  status: 'ST03'
}];
const columns = [{
  key: 'regNo',
  label: 'Reg. No',
  sortable: true
}, {
  key: 'name',
  label: 'Name',
  sortable: true
}, {
  key: 'fatherName',
  label: 'Father Name',
  sortable: true
}, {
  key: 'mobile',
  label: 'Mobile',
  sortable: false
}, {
  key: 'email',
  label: 'Email',
  sortable: false
}, {
  key: 'mahanayaka',
  label: 'Mahanayaka',
  sortable: false
}, {
  key: 'remarks',
  label: 'Remarks',
  sortable: false
}, {
  key: 'category',
  label: 'Category',
  sortable: true
}, {
  key: 'status',
  label: 'Status',
  sortable: true
}];
export function BhikkuList() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const handleEdit = (item: any) => {
    console.log('Edit:', item);
  };
  const handleDelete = (item: any) => {
    console.log('Delete:', item);
  };
  return <div className="w-full min-h-screen bg-gray-50">
      <TopBar onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
      <Sidebar isOpen={sidebarOpen} />
      <div className={`transition-all duration-300 pt-16 ${sidebarOpen ? 'ml-64' : 'ml-0'}`}>
        <main className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold text-gray-800">Bhikku List</h1>
            <button className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg transition-colors">
              <PlusIcon className="w-5 h-5" />
              Add Bhikku
            </button>
          </div>
          <DataTable columns={columns} data={sampleData} onEdit={handleEdit} onDelete={handleDelete} />
        </main>
         <FooterBar />
      </div>
    </div>;
}