import { Link } from 'react-router-dom';

export const BoxProduct = (props) => {
  const { name, products, numberOfItem, to = '', className } = props;

  return (
    <section className={'box-wrap ' + className}>
      <div className='container box'>
        <div className='box-heading'>
          <h4 className='box-heading-text'>
            <Link to={to}>{name}</Link>
          </h4>
        </div>
        <section className='box-main'>
          <div className='grid box-main-grid'>
            {products &&
              products.length > 0 &&
              products.map((product, index) => {
                if (index < numberOfItem) {
                  return 1;
                }
                return null;
              })}
            {(products === undefined || products?.length === 0) && (
              <div className='error-wrap'>
                <p className='error-message'>Chưa có sản phẩm</p>
              </div>
            )}
          </div>
        </section>
      </div>
    </section>
  );
};