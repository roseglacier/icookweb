"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import styles from './index.module.css';

interface Recipe {
  id: string;
  name: string;
  cover_image: string;
  video_link: string;
}

// Home 组件
export default function Home() {
  //使用 useState 钩子创建一个状态变量 recipes，它用于存储食谱数据。初始值为空数组。
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        //1. 发起网络请求
        const response = await fetch('http://localhost:8080'); 

        //2. 检查响应状态
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        //3. 解析 JSON 数据
        const data = await response.json();

        //4. 处理数据
        const recipesData: Recipe[] = data.recipes.map((recipe: any) => ({
          id: recipe.id,  
          name: recipe.name,
          cover_image: recipe.cover_image,
          video_link: recipe.video_link
        }));

        // 5. 更新状态
        setRecipes(recipesData);

      } catch (error) {
        // 6. 错误处理
        console.error('Failed to fetch recipes:', error);
      }
    };

    // 7. 调用异步函数
    fetchData();
    
    // 8. 依赖数组为空，表示只在组件挂载时调用
  }, []);

  return (
    <div className={styles.container}>
      {recipes.map(recipe => (
        <div key={recipe.id} className={styles.card}>
          <a href={recipe.video_link} target="_blank" rel="noopener noreferrer">
            <Image
              src={recipe.cover_image}
              alt={recipe.name}
              width={300}
              height={200}
              className={styles.image}
            />
          </a>
          <h3 className={styles.title}>{recipe.name}</h3>
        </div>
      ))}
    </div>
  );
}
