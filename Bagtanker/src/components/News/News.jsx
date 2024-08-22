import styles from './News.module.scss'
import { SupabaseContext } from '../../providers/supabaseProvider';
import { useContext, useState, useEffect } from 'react';
import ContentWrapper from '../ContentWrapper/ContentWrapper';





const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const monthNames = [
        "Januar", "Februar", "Marts", "April", "Maj", "Juni",
        "Juli", "August", "September", "Oktober", "November", "December"
    ];
    const month = monthNames[date.getMonth()];
    const year = date.getFullYear();
    return `${day}. ${month} ${year}`;
};


const News = () => {

    const supabase = useContext(SupabaseContext)
    const [news, setNews] = useState([])
    const [images, setImages] = useState([])



    //get array of news as objects containing title, created_at, content and image_id
    const fetchNews = async () => {

        const { data: newsData, error: newsError } = await supabase
            .from('news')
            .select('title, created_at, content, image_id')
            .order('created_at', { ascending: false })

        if (newsError) {
            console.log(newsError)
            return
        }
        console.log("hello");
        console.log(newsData);



        setNews(newsData)

    }

    useEffect(() => { fetchNews() }, [])

    const fetchNewsImages = async () => {
        const imageIds = news.map(newsItem => newsItem.image_id);
        console.log('Image IDs:', imageIds); // Log the image IDs

        const { data: imageData, error: imageError } = await supabase
            .from('images')
            .select('filename, id')
            .in('id', imageIds);

        if (imageError) {
            console.log(imageError);
            return;
        }



        setImages(imageData);
        console.log('Image data:', imageData); // Log the image data


    };


    useEffect(() => {
        if (news.length > 0) {
            fetchNewsImages();
        }
    }, [news]);

    // Combine news and images into a new array
    const combinedArray = news.map(newsItem => {
        const image = images.find(img => img.id === newsItem.image_id);
        return {
            ...newsItem,
            filename: image ? image.filename : null
        };
    });

    console.log('News with images:', combinedArray); // Log the combined data

    const [selectedArticle, setSelectedArticle] = useState(combinedArray[0]);
    const [selectedIndex, setSelectedIndex] = useState(0);

    const handleArticleClick = (article, index) => {
        setSelectedArticle(article);
        setSelectedIndex(index);
        // navigate(`/home/nyheder/${article.title}`);

        console.log('Selected article:', article);
    };


    return (

        <ContentWrapper title={selectedArticle?.title ? selectedArticle.title : (combinedArray[0] ? combinedArray[0].title : 'Loading...')}>
            <div className={styles.innerContent}>
                <section className={styles.newsArticle}>
                    <article>
                        {combinedArray.length > 0 ? (
                            <>
                                <img src={selectedArticle?.filename ? selectedArticle.filename : combinedArray[0].filename} alt="" />
                                <p className={styles.publishDate}>{formatDate(selectedArticle?.created_at ? selectedArticle.created_at : combinedArray[0].created_at)}:</p>
                                <p>{selectedArticle?.content ? selectedArticle.content : combinedArray[0].content}</p>
                            </>
                        ) : (
                            <p>Loading...</p>
                        )}
                    </article>
                </section>

                <div className={styles.newsNav}>
                    <h3>Se også...</h3>
                    <div className={styles.newsList}>
                        {combinedArray.length > 0 ? (
                            combinedArray.map((item, index) => (
                                <div onClick={() => handleArticleClick(item, index)}
                                    key={index}
                                    className={`${styles.navItem} ${selectedIndex === index ? styles.selectedItem : ''}`}>
                                    <p className={styles.publishDate}>{formatDate(item.created_at)}</p>
                                    <p>{item.title}</p>
                                </div>

                            ))
                        ) : (
                            <p>Loading news...</p>
                        )}
                    </div>
                </div>
            </div>
        </ContentWrapper>

    )

}

export default News