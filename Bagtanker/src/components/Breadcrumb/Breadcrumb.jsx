import styles from './Breadcrumb.module.scss';

const Breadcrumb = ({ items }) => {
    return (
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
                {items.map((item, index) => (
                    <li key={index} className="breadcrumb-item">
                        {item}
                    </li>
                ))}
            </ol>
        </nav>
    );
}

export default Breadcrumb;