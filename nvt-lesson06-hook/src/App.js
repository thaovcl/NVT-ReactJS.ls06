import logo from './logo.svg'
import './App.css';
import react, {useState} from 'react'
import NvtListTask from './components/NvtListTask';
import NvtTaskAddOrEdit from './components/NvtTaskAddOrEdit';

function App() {
  const nvt_listTasks = [
    // Mock data
    { nvt_taskId:1,nvt_taskName:"Nguyen Van Thao", nvt_level:"Small" },
    { nvt_taskId:1,nvt_taskName:"Học lập trình frontend", nvt_level:"Small" },
    { nvt_taskId:2, nvt_taskName:"Học lập trình reactjs",nvt_level:"Medium"},
    { nvt_taskId:3, nvt_taskName:"Lập trình với Frontend - Reactjs",nvt_level:"High"},
    { nvt_taskId:4, nvt_taskName:"Lập trình Fullstack (PHP, Java, NetCore)",nvt_level:"Small"},
   ];
   // sử dụng hàm useState để lưu trữ trạng thái dữ liệu
   const [nvtlistTasks, setNvtListTasks]= useState(nvt_listTasks);

   const nvtHandleSubmit = (nvtParam)=>{
    console.log("App:", nvtParam);
    setNvtListTasks(prev=>{
      return{
        ...prev,
      }
    })
   }

  return(
    <div className="container border">
      <h1>Nguyen Van Thao - K22N1</h1>
      <hr/>
      <div>
        {/* Danh sach list task */ }
        < NvtListTask renderNvtListTasks = {nvtlistTasks} />
      </div>
      <div>
        <NvtTaskAddOrEdit nvtOsubmit={nvtHandleSubmit}/>
      </div>

    </div>
  )
}

export default App;