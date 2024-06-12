const { db } = require('@vercel/postgres');
const { v4: uuidv4 } = require('uuid');
const data = require('../lib/data.json');

async function seedImages(client) {
  try {
    const insertedImages = await Promise.all(
      data.map(
        (item, index) => client.sql`
				INSERT INTO images (id, mobile, tablet, desktop)
				VALUES (${index + 1}, ${item.image.mobile}, ${item.image.tablet}, ${item.image.desktop})
				`,
      ),
    );

    console.log(insertedImages);

    return {
      images: insertedImages,
    };
  } catch (error) {
    console.error('Error inserting images', error);
    throw error;
  }
}

async function seedCategoryImages(client) {
  try {
    const insertedCategoryImages = await Promise.all(
      data.map(
        (item, index) => client.sql`
				INSERT INTO category_images (id, mobile, tablet, desktop)
				VALUES (${index + 1}, ${item.categoryImage.mobile}, ${item.categoryImage.tablet}, ${item.categoryImage.desktop})
				`,
      ),
    );

    console.log(insertedCategoryImages);

    return {
      categoriesImages: insertedCategoryImages,
    };
  } catch (error) {
    console.error('Error inserting categories images', error);
    throw error;
  }
}

async function seedProducts(client) {
  try {
    const insertedProducts = await Promise.all(
      data.map(
        (product, index) => client.sql`
				INSERT INTO products (id, slug, name, category, new, price, description, features, image_id, category_image_id)
				VALUES (${product.id}, ${product.slug}, ${product.name}, ${product.category}, ${product.new}, ${product.price}, ${product.description}, ${product.features}, ${index + 1}, ${index + 1})
				`,
      ),
    );

    console.log(insertedProducts);

    return {
      products: insertedProducts,
    };
  } catch (error) {
    console.error('Error inserting products', error);
    throw error;
  }
}

async function seedGalleryImages(client) {
  try {
    const insertedFirstGalleryImages = await Promise.all(
      data.map(
        (item, index) => client.sql`
					INSERT INTO gallery_images (id, mobile, tablet, desktop, product_id)
					VALUES (${uuidv4()}, ${item.gallery.first.mobile}, ${item.gallery.first.tablet}, ${item.gallery.first.desktop}, ${index + 1})
				`,
      ),
    );

    const insertedSecondGalleryImages = await Promise.all(
      data.map(
        (item, index) => client.sql`
					INSERT INTO gallery_images (id, mobile, tablet, desktop, product_id)
					VALUES (${uuidv4()}, ${item.gallery.second.mobile}, ${item.gallery.second.tablet}, ${item.gallery.second.desktop}, ${index + 1})
				`,
      ),
    );

    const insertedThirdGalleryImages = await Promise.all(
      data.map(
        (item, index) => client.sql`
					INSERT INTO gallery_images (id, mobile, tablet, desktop, product_id)
					VALUES (${uuidv4()}, ${item.gallery.third.mobile}, ${item.gallery.third.tablet}, ${item.gallery.third.desktop}, ${index + 1})
				`,
      ),
    );

    console.log(insertedFirstGalleryImages);
    console.log(insertedSecondGalleryImages);
    console.log(insertedThirdGalleryImages);

    return {
      firstGalleryImages: insertedFirstGalleryImages,
      secondGalleryImages: insertedSecondGalleryImages,
      thirdGalleryImages: insertedThirdGalleryImages,
    };
  } catch (error) {
    console.error('Error inserting gallery images', error);
    throw error;
  }
}

async function seedIncludes(client) {
  try {
    const insertedIncludes = await client.sql`
			INSERT INTO item_includes (id, quantity, item)
			VALUES 
			(${uuidv4()}, 2, 'Earphone unit'),
			(${uuidv4()}, 6, 'Multi-size earplugs'),
			(${uuidv4()}, 1, 'User manual'),
			(${uuidv4()}, 1, 'USB-C charging cable'),
			(${uuidv4()}, 1, 'Travel pouch'),
			(${uuidv4()}, 1, 'Headphone unit'),
			(${uuidv4()}, 2, 'Replacement earcups'),
			(${uuidv4()}, 2, '3.5mm 5m audio cable'),
			(${uuidv4()}, 1, 'Travel bag'),
			(${uuidv4()}, 1, 'Speaker unit'),
			(${uuidv4()}, 2, 'Speaker cloth panel'),
			(${uuidv4()}, 1, '3.5mm 7.5m audio cable'),
			(${uuidv4()}, 1, '7.5m optical cable'),
			(${uuidv4()}, 1, '10m optical cable')
			`;

    console.log(insertedIncludes);

    return {
      includes: insertedIncludes,
    };
  } catch (error) {
    console.error('Error inserting includes', error);
    throw error;
  }
}

async function seedOtherProducts(client) {
	try {
		const insertedOtherProducts = await client.sql`
		INSERT INTO other_products (id, slug, name, image_id)
		VALUES 
		(${uuidv4()}, 'xx99-mark-one-headphones', 'XX99 Mark I', 3),
		(${uuidv4()}, 'xx59-headphones', 'XX59', 2),
		(${uuidv4()}, 'zx9-speaker', 'ZX9 Speaker', 6),
		(${uuidv4()}, 'xx99-mark-two-headphones', 'XX99 Mark II', 4),
		(${uuidv4()}, 'zx7-speaker', 'ZX7 Speaker', 5)
		`

		console.log(insertedOtherProducts);

		return {
			otherProducts: insertedOtherProducts,
		};

	} catch (error) {
		console.error('Error inserting other products', error);
		throw error;
	}
}

async function main() {
  const client = await db.connect();

  await seedImages(client);
  await seedCategoryImages(client);
  await seedProducts(client);
  await seedGalleryImages(client);
  await seedIncludes(client);
	await seedOtherProducts(client);

  await client.end();
}

main().catch((err) => {
  console.error(
    'An error occurred while attempting to seed the database:',
    err,
  );
});
