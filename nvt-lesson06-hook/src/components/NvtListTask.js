import React from 'react'

export default function NvtListTask() {
    console.log(renderNvtListTasks);

    // render data  
    let nvtElementTask = renderNvtListTasks.map((task, index)=>{
        return(
            <>
            <tr key={index}>
                <td>{index+1}</td>
                <td>{task.taskId}</td>
                <td>{task.taskName}</td>
                <td>{task.nvt_level}</td>
                <td>
                    <button className='btn btn-success'>Edit</button>
                    <button className='btn btn-danger'>Remove</button>
                </td>

            </tr>
            </>
        )
    })
  
    return ( 
      <div>
        <h2>Danh sach cac nhiem vu</h2>
        <table className='table table-bordered'>
            <thead>
                <tr>
                    <th>STT</th>
                    <th>Tast Id</th>
                    <th>Task Name</th>
                    <th>Task Level</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {nvtElementTask}
            </tbody>

        </table>
      </div>
    )
  }

