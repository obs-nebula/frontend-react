import { useEffect, useState } from 'react';
import ContentComponent from './ContentComponent';
function InfiniteScroll () {
	const [dataSource, setdataSource] = useState([]);
	const [page, setPage] = useState(1);
	const getRandomData = async () => {
		let RandomResponse = await fetch(`https://randomuser.me/api/?lego`);
		const RandomData = await RandomResponse.json();
		const Data = RandomData.results[0];
		setdataSource((prev) => [...prev, Data]);
	};
	useEffect(() => {
		getRandomData();
		getRandomData();
		getRandomData();
	}, [page]);
	const handelInfiniteScroll = async () => {
		try {
			if (
				window.innerHeight + document.documentElement.scrollTop + 1 >=
				document.documentElement.scrollHeight
			) {
				setPage((prev) => prev + 1);
			}
		} catch (error) {
			console.log(error);
		}

	};
	useEffect(() => {
		window.addEventListener('scroll', handelInfiniteScroll);
		return () => window.removeEventListener('scroll', handelInfiniteScroll);
	}, []);
	return (
		<>
			<ContentComponent content={dataSource} />

		</>
	);
}
export default InfiniteScroll;