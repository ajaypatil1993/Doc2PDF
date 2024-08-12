
# Doc2PDF

## Overview

**Doc2PDF** is a full-stack application designed to convert Microsoft Word documents (`.doc` and `.docx`) into PDF format. The app is built using React.js for the frontend and Node.js with Express for the backend. It features a responsive design and supports both dark and light themes. The application uses Tailwind CSS for styling and includes various tools and libraries for development.

## Technologies Used

- **Frontend**: React.js, Tailwind CSS
- **Backend**: Node.js, Express
- **Styling**: Tailwind CSS
- **Development Tools**: Vite, Nodemon
- **Libraries**:
  - `multer` (for handling file uploads)
  - `docx-pdf` (for converting Word documents to PDF)

## Installation

### Frontend

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/Doc2PDF.git
   cd Doc2PDF
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Start the Development Server**:
   ```bash
   npm start
   ```

   Open your browser and navigate to `http://localhost:3000` to view the application.

### Backend

1. **Navigate to the Backend Directory** (if it's a separate directory):
   ```bash
   cd server
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Start the Server**:
   ```bash
   nodemon server.js
   ```

   Ensure the backend server is running and accessible.

## Usage

1. **Open the Application**: Go to `http://localhost:3000` in your browser.
2. **Upload a File**: Click on the "Choose File" button to select a `.doc` or `.docx` file from your computer.
3. **Convert the File**: Click on the "Convert File" button to start the conversion process.
4. **Download the PDF**: Once the conversion is complete, you will be provided with a download link for the converted PDF file.

## Configuration

- **API Endpoint**: The frontend is configured to communicate with the backend API endpoint at `http://localhost:3000/convertFile` (adjust if necessary).

## Testing

Use Postman to test the API endpoints:
- **Upload File**: `POST /convertFile` with `multipart/form-data` containing the file.

## Screenshots

### Dark Theme Preview

![Dark Theme Preview](https://github.com/user-attachments/assets/444a2ef8-6c79-423b-9887-abc8d9822184)

### Light Theme Preview

![Light Theme Preview](https://github.com/user-attachments/assets/2a0b80ab-9445-49b5-bc29-044644d7e5db)

### VS Code Setup

![VS Code Setup](https://github.com/user-attachments/assets/bff0f287-649b-42dd-b811-38ca219a1e71)

### Responsive Design

![Responsive Design 1](https://github.com/user-attachments/assets/4f21af6a-d9c6-4dc5-9bbc-7d8a064c2411)
![Responsive Design 2](https://github.com/user-attachments/assets/044575de-c8ca-4028-8833-4fc2bf2f398d)

## Contributing

We welcome contributions to improve the project. To contribute:

1. **Fork the Repository**.
2. **Create a New Branch**:
   ```bash
   git checkout -b feature/your-feature
   ```
3. **Make Your Changes**.
4. **Commit Your Changes**:
   ```bash
   git add .
   git commit -m "Add your message here"
   ```
5. **Push to Your Fork**:
   ```bash
   git push origin feature/your-feature
   ```
6. **Create a Pull Request**.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

For any questions or support, please contact:

- **Author**: [aj41093@gmail.com](mailto:aj41093@gmail.com)
- **GitHub**: [ajaypatil1993](https://github.com/ajaypatil1993)
