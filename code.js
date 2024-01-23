function get_random_image() {
    var image_array = [
      '/img/lagna.jpeg',
      '/img/lagna1.jpeg',
      '/img/sangiulio.jpeg',
      '/img/mottarone.jpg'
    ];
    const random_index = Math.floor(Math.random() * image_array.length);
    const selected_image = image_array[random_index];
    return selected_image;
}
