import react, {useRef,useEffect,useState} from "react";
import Evento from "../Components/Evento";
import Swal from "sweetalert2";
import Footer from "../Components/Footer";

export default function Formulario(){
    const backend = 'http://localhost/RevistaDigital_API/'
    const [success,setSuccess] = useState([false]);

    let titulo_postRef = useRef(null);
    let fileInputRef = useRef(null);
    let descricao_postRef = useRef(null);
    let usuarios_id_usuarioRef = useRef(null);
    let categorias_id_categoriaRef = useRef(null);
    let titulo2_postRef = useRef(null);
    let fileInputRef2 = useRef(null);
    let descricao_postRef2 = useRef(null);

    function successF(){
        Swal.fire({
            title: "Sucesso!",
            icon: "success",
            confirmButtonText: "OK"
          });
          
    }
    useEffect(() => {
        if (success) {
            successF();
            setTimeout(() => setSuccess(false), 100); 
        }
    }, [success]);
    async function post(event){

        event.preventDefault();
        let titulo_post = titulo_postRef.current.value;
        let fileInput = fileInputRef.current.files[0].name;
        let descricao_post = descricao_postRef.current.value;
        let usuarios_id_usuario = usuarios_id_usuarioRef.current.value;
        let categorias_id_categoria = categorias_id_categoriaRef.current.value;
        let titulo3_postRef = titulo2_postRef.current.value;
        let fileInputRef3 = fileInputRef2.current.files[0].name;
        let descricao_post2 = descricao_postRef2.current.value;
        try{
            const dados ={
                titulo_post: titulo_post,
                foto_post: `http://localhost/RevistaDigital_API/images/${fileInput}`,
                descricao_post: descricao_post,
                usuarios_id_usuario: usuarios_id_usuario,
                categorias_id_categoria: categorias_id_categoria,
                status_post: 0,
                sub_titulo_post: titulo3_postRef,
                sub_foto_post: `http://localhost/RevistaDigital_API/images/${fileInputRef3}`,
                sub_descricao_post: descricao_post2
            }
            let arq = fileInputRef.current.files[0]
            let sub_arq = fileInputRef2.current.files[0]
        
            let formData = new FormData();
            formData.append('file',arq);
            let formData2 = new FormData();
            formData2.append('file',sub_arq);

            const responseImage = await fetch("http://localhost/RevistaDigital_API/posts/images", {
                method: 'POST',
                body: formData,
            });
            const responseImage2 = await fetch("http://localhost/RevistaDigital_API/posts/images", {
                method: 'POST',
                body: formData2,
            });

            console.log(dados)
            console.log('Enviando dados...')
            const response = await fetch("http://localhost/RevistaDigital_API/posts", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    
                },
                body: JSON.stringify(dados)
            });
            console.log('Post enviado!!')
            setSuccess(1);
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
        <div className="row1">
        <form id="form-categoria" method="post" enctype="multipart/form-data">
            <div className="mb-3">
                <label for="titulo_post" className="form-label">Titulo</label>
                <input type="text" className="form-control" id="titulo_post" ref={titulo_postRef} name="titulo_post" required />
            </div>
            <div className="mb-3">
                <label for="titulo_post2" className="form-label">Sub Titulo</label>
                <input type="text" className="form-control" id="titulo_post2" ref={titulo2_postRef} name="titulo_post2" required />
            </div>
            <div className="mb-3">
                <label for="foto_post" className="form-label">Foto</label>
                <input type="file" className="form-file" id="file" ref={fileInputRef} name="file"  required />
            </div>
            <div className="mb-3">
                <label for="foto_post2" className="form-label">Sub Foto</label>
                <input type="file" className="form-file" id="file2" ref={fileInputRef2} name="file2"  required />
            </div>
            <div className="mb-3">
                <label for="descricao_post" className="form-label">Conteudo</label>
                <input type="text" className="form-control" ref={descricao_postRef} id="descricao_post" name="descricao_post" required/>
            </div>
            <div className="mb-3">
                <label for="descricao_post2" className="form-label">Sub conteudo</label>
                <input type="text" className="form-control" ref={descricao_postRef2} id="descricao_post2" name="descricao_post2" required/>
            </div>
            <div className="mb-3">
                <label for="usuarios_id_usuario" className="form-label">ID User</label>
                <input type="number" className="form-control" id="usuarios_id_usuario" ref={usuarios_id_usuarioRef} name="usuarios_id_usuario"  required/>
            </div>
            <div className="mb-3">
                <label for="categorias_id_categoria" className="form-label">Categoria</label>
                <input list="categorias" className="form-control" id="categorias_id_categoria" ref={categorias_id_categoriaRef} name="categorias_id_categoria"  required/>
                <datalist id="categorias">
                  <option value="1">Historia</option>
                  <option value="2">Matematica</option>
                  <option value="3">Ciencias</option>
                  <option value="4">Quimica</option>
                  <option value="5">Fisica</option>
                  <option value="6">Linguagens</option>
                  <option value="7">Geografia</option>

                </datalist>
            </div>
            <button type="submit" className="btn btn-primary w-100" onClick={post} >Enviar</button>
        </form>
        </div>
        </>
    );
}   