import react, {useRef,useEffect,useState} from "react";
import Evento from "../Components/Evento";
import Swal from "sweetalert2";
import Footer from "../Components/Footer";
import { useNavigate } from "react-router-dom";

export default function Formulario(){
    const backend = 'http://localhost/RevistaDigital_API/'
    const serverLinux = 'http://localhost/RevistaDigital_API';
    const serverWindows = 'http://localhost/RevistaDigital_API/'

    let titulo_postRef = useRef(null);
    let fileInputRef = useRef(null);
    let descricao_postRef = useRef(null);
    let categorias_id_categoriaRef = useRef(null);
    let titulo2_postRef = useRef(null);
    let fileInputRef2 = useRef(null);
    let descricao_postRef2 = useRef(null);
    let navigate = useNavigate();

   
    
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            Swal.fire({
                title: "Token ausente!",
                icon: "warning",
                confirmButtonText: "OK"
            });
            navigate('/');
        } else {
            getNull();
        }
    }, []);

    async function getNull() {
        const api = await fetch(`${backend}/posts/null`,{
            headers:{"Content-Type":"application/json",
                "Authorization": `Bearer ${localStorage.getItem('token')}`
            },
        });
    
        if(api.status == 401){
            Swal.fire({
                title: "Usuario sem permissão!",
                icon: "error",
                confirmButtonText: "OK"
            })
            setTimeout(() => {
                navigate('/')
            }, 1000);
        }
    }

    async function post(event){

        event.preventDefault();
        let titulo_post = titulo_postRef.current.value;
        let fileInput = fileInputRef.current.files[0].name;
        let descricao_post = descricao_postRef.current.value;
        let categorias_id_categoria = categorias_id_categoriaRef.current.value;
        let titulo3_postRef = titulo2_postRef.current.value;
        let fileInputRef3 = fileInputRef2.current.files[0].name;
        let descricao_post2 = descricao_postRef2.current.value;
        try{

            const dados ={
                titulo_post: titulo_post,
                foto_post: `${serverWindows}/images/${fileInput}`,
                descricao_post: descricao_post,
                usuarios_id_usuario: localStorage.getItem('id'),
                categorias_id_categoria: categorias_id_categoria,
                status_post: 0,
                sub_titulo_post: titulo3_postRef,
                sub_foto_post: `${serverWindows}/images/${fileInputRef3}`,
                sub_descricao_post: descricao_post2
            }
            let arq = fileInputRef.current.files[0]
            let sub_arq = fileInputRef2.current.files[0]
        
            let formData = new FormData();
            formData.append('file',arq);
            let formData2 = new FormData();
            formData2.append('file',sub_arq);

            const responseImage = await fetch(`${serverWindows}/posts/images`, {
                method: 'POST',
                body: formData,
            });
            const responseImage2 = await fetch(`${serverWindows}/posts/images`, {
                method: 'POST',
                body: formData2,
            });

            console.log(dados)
            console.log('Enviando dados...')
            const response = await fetch(`${serverWindows}/posts`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                    
                },
                body: JSON.stringify(dados)
            });
            if(response.status == 401){
                Swal.fire({
                    title: "Usuario sem permissão!",
                    icon: "error",
                    confirmButtonText: "OK"
                })
            }else{
                Swal.fire({
                    title: "Sucesso!",
                    icon: "success",
                    confirmButtonText: "OK"
                  });
            }
            console.log(response.status)
            console.log('Post enviado!!')
            // setSuccess(1);
        }catch(error) {
            console.error("Erro ao enviar:", error);
        }
    }

    return(
        <>
        <Evento></Evento>
        <div className="titulo">
            <h3>Formulario de postagem</h3>
        </div>
        <div className="formulario-wrapper">
  <div className="formulario-card">
    <h3 className="formulario-titulo">Formulário de Postagem</h3>
    <form id="form-categoria" method="post" encType="multipart/form-data">
      <div className="formulario-grid">
        {/* Coluna esquerda */}
        <div className="formulario-col">
          <div className="mb-3">
            <label htmlFor="titulo_post" className="form-label">Título</label>
            <input type="text" className="form-control" id="titulo_post" ref={titulo_postRef} name="titulo_post" required />
          </div>
          <div className="mb-3">
            <label htmlFor="titulo_post2" className="form-label">Subtítulo</label>
            <input type="text" className="form-control" id="titulo_post2" ref={titulo2_postRef} name="titulo_post2" required />
          </div>
          <div className="mb-3">
            <label htmlFor="file" className="form-label">Foto</label>
            <input type="file" className="form-control" id="file" ref={fileInputRef} name="file" required />
          </div>
          <div className="mb-3">
            <label htmlFor="file2" className="form-label">Subfoto</label>
            <input type="file" className="form-control" id="file2" ref={fileInputRef2} name="file2" required />
          </div>
        </div>

        {/* Coluna direita */}
        <div className="formulario-col formulario-col-direita">
          <div className="mb-3">
            <label htmlFor="descricao_post" className="form-label">Conteúdo</label>
            <textarea className="form-control" id="descricao_post" ref={descricao_postRef} name="descricao_post" rows="6" required></textarea>
          </div>
          <div className="mb-3">
            <label htmlFor="descricao_post2" className="form-label">Subconteúdo</label>
            <textarea className="form-control" id="descricao_post2" ref={descricao_postRef2} name="descricao_post2" rows="6" required></textarea>
          </div>
          <div className="mb-3">
            <label htmlFor="categorias_id_categoria" className="form-label">Categoria</label>
            <input list="categorias" className="form-control" id="categorias_id_categoria" ref={categorias_id_categoriaRef} name="categorias_id_categoria" required />
            <datalist id="categorias">
              <option value="1">História</option>
              <option value="2">Matemática</option>
              <option value="3">Ciências</option>
              <option value="4">Química</option>
              <option value="5">Física</option>
              <option value="6">Linguagens</option>
              <option value="7">Geografia</option>
            </datalist>
          </div>
        </div>
      </div>
      <button type="submit" className="btn btn-primary mt-4 w-100" onClick={post}>Enviar</button>
    </form>
  </div>
</div>

        </>
    );
}   