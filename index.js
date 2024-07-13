import express from "express";
import bodyParser from "body-parser";
import axios from "axios";
import path from 'path';  // Import the path module
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app=express();
const port=3000;

app.use(express.static("public"));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

const apiKey="&api_key=b052783e713ee34ff49f75d1c7ca9714";
const baseUrl="https://api.themoviedb.org/3"
const imgUrl= "https://image.tmdb.org/t/p/w500"

app.get("/",async(req,res)=>{
    try{
        const top_rated_r=await axios.get(baseUrl+"/search/movie?query=Avengers"+apiKey);
        const top_rated=top_rated_r.data;
        const popular_movie_response = await axios.get(baseUrl+"/discover/movie?sort_by=popularity.desc"+apiKey);
        const popular_result = popular_movie_response.data;
        const trending_movie_response = await axios.get(baseUrl+"/trending/movie/day?"+apiKey);
        const trending_result = trending_movie_response.data;
        const popular_tv_r=await axios.get(baseUrl+"/discover/tv?sort_by=popularity.desc"+apiKey);
        const popular_tv=popular_tv_r.data;
        const trending_tv_r=await axios.get(baseUrl+"/trending/tv/day?"+apiKey);
        const trending_tv=trending_tv_r.data;
        res.render("index.ejs",{
            tr:top_rated.results,
            pmovie:popular_result.results,
            tmovie:trending_result.results,
            ptv:popular_tv.results,
            ttv:trending_tv.results,
        });
    }
    catch (error){
        console.error("Failed to make request:", error.message);
        res.render("index.ejs", {
          error: error.message,
        });
    }
});

app.post("/search",async(req,res)=>{
    const name=req.body.movie_name;
    try{
        const response = await axios.get(baseUrl+"/search/movie?query="+name+apiKey);
        const result = response.data;
        const top_rated_r=await axios.get(baseUrl+"/search/movie?query=Avengers"+apiKey);
        const top_rated=top_rated_r.data;
        const responses = await axios.get(baseUrl+"/search/tv?query="+name+apiKey);
        const results = responses.data;
        res.render("index.ejs",{
            tr:top_rated.results,
            searchdata:result.results,
            searchdatas:results.results,
        })
    }catch (error) {
        console.error("Failed to make request:", error.message);
        res.render("index.ejs", {
        error: error.message,
        });
    }
});



app.get("/view/:id",async(req,res)=>{
    const id=req.params.id;
    try{
        const response = await axios.get(baseUrl+"/movie/"+id+"?api_key=4ce47dea628789a25e9e5e4eb744be91");
        const result = response.data;
        var date = new Date(result.release_date);
        const release_date = date.getFullYear();
        var tag=result.tagline;
        var t=result.title;
        var rel=result.release_date;
        res.render("view.ejs", {
            view_data : result,
            release_date : release_date,
            tagline:tag,
            title:t,
            release:rel
        })
        }catch (error) {
        console.error("Failed to make request:", error.message);
        res.render("view.ejs", {
          error: error.message,
        });
    }
})

app.get("/view/tv/:id",async(req,res)=>{
    const id=req.params.id;
    try{
        const response = await axios.get(baseUrl+"/tv/"+id+"?api_key=4ce47dea628789a25e9e5e4eb744be91");
            const result = response.data;
            var date = new Date(result.first_air_date);
            const release_date = date.getFullYear();
            var tag=result.tagline;
            var t=result.name;
            var rel=result.first_air_date;
            res.render("view.ejs", {
                view_data : result,
                release_date : release_date,
                tagline:tag,
                title:t,
                release:rel
            })
    }catch (error) {
        console.error("Failed to make request:", error.message);
        res.render("view.ejs", {
          error: error.message,
        });
    }
})

app.listen(port, () =>{
    console.log(`Server is ruuning on port ${port}`);
});