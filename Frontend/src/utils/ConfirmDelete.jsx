import toast from 'react-hot-toast';

export const confirmDelete =(onConfirm){
toast(()=>{
    <span>
    <h1>Are you sure you want to delete this playlist?</h1>
    <button
    onClick={()=>{
        toast.dismiss(t.id)
        onConfirm()// call the function you pass in
        toast.success('Playlist deleted successfully!')
    }}
    className="mt-2 mr-2 px-2 py-1 bg-red-500 text-white rounded"
    >
    Yes
    </button>
    <button
    onClick={()=>toast.dismiss(t.id)}
     className="mt-2 px-2 py-1 bg-gray-300 rounded"
    >No</button>
    </span>,{duration: 5000}
})
}