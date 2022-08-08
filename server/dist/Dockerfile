#Untuk memberi tahu docker engine bahwa image yang dipakai adalah node versi 16
FROM node:16

#Untuk membuat working directory
WORKDIR /app

#Biasanya untuk menjalankan aplikasi berbasis node kita diharuskan untuk menjalankan npm install, untuk itu kita perlu package.json. Kode dibawah digunakan untuk menyalin file yang kita butuhkan.
COPY ["package.json", "package-lock.json*", "./"]

#Menjalankan npm install
RUN npm install

#Menyalin semua file dalam direktori
COPY . .

#Menjalankan kode didalam package.json pada port 8080
EXPOSE 8080
CMD [ "npm", "run", "dev", "&&", "npm", "run", "start" ]