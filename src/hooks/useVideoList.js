import { get, getDatabase, limitToFirst, orderByKey, query, ref, startAt } from "firebase/database";
import { useEffect, useState } from "react";

export default function useVideoList(page) {
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);
	const [videos, setVideos] = useState([]);
	const [hasMore, setHasMore] = useState(true);

	useEffect(() => {
		// databse related works

		async function fetchVideos() {
			const db = getDatabase();
			const videosRef = ref(db, "videos");
			const videoQuery = query(videosRef, orderByKey(), startAt("" + page), limitToFirst(8));

			try {
				setLoading(true);
				setError(false);
				const snapshot = await get(videoQuery);

				setLoading(false);
				if (snapshot.exists()) {
					setVideos((prevVideos) => {
						return [...prevVideos, ...Object.values(snapshot.val())];
					});
				} else {
					hasMore(false);
				}
			} catch (error) {
				console.log(error);
				setError(true);
				setLoading(false);
			}
		}

		fetchVideos();
	}, [page, hasMore]);

	return { loading, error, videos, setHasMore };
}
