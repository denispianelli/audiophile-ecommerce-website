import db from '@/db/prisma';
import { promise } from 'zod';

export async function getAllProducts() {
  try {
    const products = await db.product.findMany({
      include: {
        categoryImage: true,
      },
    });

    return products;
  } catch (error) {
    console.error(error);
    throw new Error('Error getting products');
  }
}

export async function getProductsByCategory(category: string) {
  try {
    const products = await db.product.findMany({
      orderBy: {
        id: 'desc',
      },
      include: {
        categoryImage: true,
      },
      where: {
        category: category,
      },
    });

    return products;
  } catch (error) {
    console.error(error);
    throw new Error('Error getting products by category');
  }
}

export async function getProductBySlug(slug: string) {
  // await new Promise((resolve) => setTimeout(resolve, 3000));

  try {
    const product = await db.product.findUnique({
      where: {
        slug: slug,
      },
      include: {
        image: true,
        GalleryImage: true,
        other_products: {
          select: {
            other_product: {
              include: {
                image: true,
              },
            },
          },
        },
        item_includes: {
          select: {
            item_includes: true,
          },
        },
      },
    });

    return product;
  } catch (error) {
    console.error(error);
    throw new Error('Error getting product by name');
  }
}
