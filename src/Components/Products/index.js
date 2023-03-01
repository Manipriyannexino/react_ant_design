import React, { useEffect, useState } from "react";
import { getAllProducts } from "../../API";
import { List, Image, Card, Typography, Badge, Rate, Button } from "antd";

const Products = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    getAllProducts().then((res) => {
      setItems(res.products);
    });
  }, []);
  console.log(items);
  return (
    <div>
      <List
        grid={{ column: 3 }}
        dataSource={items}
        renderItem={(item) => {
          return (
            <Badge.Ribbon
              className="item_card_badge"
              text={item.discountPercentage}
              color="blue-inverse"
            >
              <Card
                className="item_card"
                title={item.title}
                key={item.id}
                cover={
                  <Image src={item.thumbnail} className="item_card_image" />
                }
                actions={[
                  <Rate allowHalf disabled value={item.rating} />,
                  <Button type="link">Add to Cart</Button>,
                ]}
              >
                <Card.Meta
                  title={
                    <Typography.Paragraph>
                      Price:$ {item.price}{" "}
                      <Typography.Text delete type="danger">
                        ${" "}
                        {parseFloat(
                          item.price +
                            (item.price * item.discountPercentage) / 100
                        ).toFixed(2)}
                      </Typography.Text>
                    </Typography.Paragraph>
                  }
                  description={
                    <Typography.Paragraph
                      ellipsis={{
                        rows: 2,
                        expandable: true,
                        symbol: "more",
                      }}
                    >
                      {item.description}
                    </Typography.Paragraph>
                  }
                ></Card.Meta>
              </Card>
            </Badge.Ribbon>
          );
        }}
      />
    </div>
  );
};

export default Products;
