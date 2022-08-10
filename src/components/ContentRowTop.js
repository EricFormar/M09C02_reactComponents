import React from 'react';
import Contentrowmovies from './ContentRowMovies';
import Genresindb from './GenresInDb';
import Lastmovieindb from './LastMovieInDb';
function ContentRowTop() {
	let data = [
		{
			title: 'movies in data base',
			color : 'primary',
			amount : 21,
			icon : 'fa-film'
		},
		{
			title: 'total awards',
			color : 'success',
			amount : 79,
			icon : 'fa-award'
		},
		{
			title: 'actors quantity',
			color : 'warning',
			amount : 49,
			icon : 'fa-user'
		}
	]
	return (
		<div className="container-fluid">
			<div className="d-sm-flex aligns-items-center justify-content-between mb-4">
				<h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
			</div>
			<div className="row">

			{data.map((item, i) => {
				return <Contentrowmovies key={item.title+i} title={item.title} color={item.color} amount={item.amount} icon={item.icon}/>
			})}
			</div>
			<div className="row">
				<Lastmovieindb />
				<Genresindb />

			</div>

		</div>

	)

}
export default ContentRowTop;