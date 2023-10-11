import React from "react";
import img from "../img/lat4.jpg";
import img2 from "../img/lat5.jpg";
import Card from "./card";

const Project = () => {
  return (
    <>
      <section className="myProject bg bg-light" id="project">
        <div className="container">
          <h2 className="text-center">My Project</h2>
          <div className="row d-flex justify-content-center">
            <Card
              image={img}
              title="ToDoList"
              isi="membuat Project crud untuk catatan todolist dengan fitur add edit delete "
              link_p="https://Tekkheng.github.io/todolist_crud"
            />
            <Card
              image={img2}
              title="MovieListImdb"
              isi="disini saya membuat website untuk melihat/mencari film dengan deskripsi detail yang lengkap dengan fetch api"
              link_p="https://Tekkheng.github.io/movie_list"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Project;
