function Tabla({estatica}) {
  
  return (
      <div className="flex justify-center items-center py-10">
       <table className="border-collapse border border-slate-500">
         <thead className="w-70">
           <tr>
             <th className="border border-slate-500 py-5 text-2xl">Name</th>
             <th className="border border-slate-500 py-5 text-2xl">Image Meme</th>
           </tr>
         </thead>

         <tbody className="w-70">
           {estatica && 
           estatica.map((estatica)=>(
             <tr key={estatica.id}> 
               <td className="border border-slate-500 py-2">{estatica.name}</td>
               <td className="flex justify-center border border-slate-500 py-2">
                <a href={estatica.url}>
                  <img 
                    className="justify-center w-auto h-24"
                    src={estatica.url} 
                    alt="imagen.meme" 
                  />
                </a>
              </td>
             </tr>
           ))}
         </tbody>
       </table>
     </div>
  )

}

export default Tabla