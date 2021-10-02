import React, { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { Link } from "react-router-dom";
import useVideoList from "../hooks/useVideoList";
import classes from "../styles/Videos.module.css";
import Video from "./Video";

export default function Videos() {
	const [page, setPage] = useState(1);
	const { loading, error, videos, hasMore } = useVideoList(page);

	return (
		<div className={classes.videos}>
			<InfiniteScroll dataLength={videos.length} hasMore={hasMore} next={() => setPage(page + 8)}>
				{videos.length > 0 &&
					videos.map((video) =>
						video.noq > 0 ? (
							<Link to="/quiz">
								<Video
									key={video.youtubeID}
									title={video.title}
									vid={video.youtubeID}
									noq={video.noq}
								/>
							</Link>
						) : (
							<Video key={video.youtubeID} title={video.title} vid={video.youtubeID} noq={video.noq} />
						)
					)}
			</InfiniteScroll>
			{!loading && videos.length === 0 && <div>No data found!</div>}
			{error && <div>There was an error</div>}
			{loading && <div>Loading...</div>}
		</div>
	);
}
