import React, { useState } from 'react'

export default function NvtTaskAddOrEdit({nvtOsubmit}) {

    const nvtTaskObj = {
        nvt_taskId:4, 
        nvt_taskName:"Lập trình Fullstack (PHP, Java, NetCore)",
        nvt_level:""
    }
    const[nvtTask, setNvtTasks] = useState(nvtTaskObj);
    // hàm sử lí sự kiện thay dổi trên điều khiển
    const nvtHandleChange = (nvtEvent)=>{
        let name = nvtEvent.target.name;
        let value = nvtEvent.target.value;

        setNvtTasks(prev=>{
            return{
                ...prev,
            [name]:value,
            }
        })

        console.log(nvtTask);

    }

    const nvtHandleSubmit = (nvtEvent)=>{
        nvtEvent.preventDefault
    }

  return (
    <div>
        <h2>Thêm mới Task</h2>
        <form>
        <div class="input-group mb-3">
  <span class="input-group-text" id="basic-addon1">Task ID</span>
  <input type="text" name='nvt_taskName' value={nvtTask.nvt_taskName} onChange={nvtHandleChange}
  class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1">
</div>  
            <div>
                <label>Task ID</label>
                <input name='nvt_taskId' value={nvtTask.nvt_taskId} onChange={nvtHandleChange} />
            </div>
            <div>
                <label>Task Name</label>
                <input name='nvt_taskName' value={nvtTask.nvt_taskName} onChange={nvtHandleChange} />
            </div>
            <div>
                <label>Task Level</label>
                <select name='nvt_Level' value={nvtTask.nvt_level}>
                    <option value={'Small'}>Small</option>
                    <option value={'Medium'}>Medium</option>
                    <option value={'High'}>High</option>

                </select>
            </div>
            <button onClick={nvtHandle}>Ghi lại</button>
        </form>
    </div>
  )
}
