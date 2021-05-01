/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

//MySQL Libraries
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.Statement;
import java.sql.ResultSet;
import javax.servlet.ServletConfig;

/**
 *
 * @author pc
 */
@WebServlet(urlPatterns = {"/Actualizar"})
public class Actualizar extends HttpServlet {
    
    private Connection con;
    private Statement set;
    private ResultSet rs;
    
    //Servlet constructor
    public void init(ServletConfig cfg) throws ServletException{
        
        String URL = "jdbc:mysql:3306//us-cdbr-east-03.cleardb.com/registro";
        String userName = "bd6541db95b7aa";
        String passWord = "718b88a6";
        
        try{
            
            Class.forName("com.mysql.jdbc.Driver");
            
            URL = "jdbc:mysql://us-cdbr-east-03.cleardb.com/heroku_de38a9e76dc64a7";
            con = DriverManager.getConnection(URL, userName, passWord);
            set = con.createStatement();
            
            System.out.println("Conexion completa");
        }catch(Exception e){
            
            System.out.println("Conexion fallida");
            System.out.println(e.getMessage());
            System.out.println(e.getStackTrace());
            
        }
        
    }

    /**
     * Processes requests for both HTTP <code>GET</code> and <code>POST</code>
     * methods.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        
    }

    // <editor-fold defaultstate="collapsed" desc="HttpServlet methods. Click on the + sign on the left to edit the code.">
    /**
     * Handles the HTTP <code>GET</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
    }

    /**
     * Handles the HTTP <code>POST</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        try (PrintWriter out = response.getWriter()) {
            /* TODO output your page here. You may use following sample code. */
            int id;
            String nombre, appat, apmat, correo;
            
            nombre = request.getParameter("nombreCambiar");
            appat = request.getParameter("appatCambiar");
            apmat = request.getParameter("apmatCambiar");
            correo = request.getParameter("correoCambiar");

            id = Integer.parseInt(request.getParameter("idactualizar"));
            out.println("<!DOCTYPE html>\n" +
"<!--\n" +
"To change this license header, choose License Headers in Project Properties.\n" +
"To change this template file, choose Tools | Templates\n" +
"and open the template in the editor.\n" +
"-->\n" +
"<html>\n" +
"    <head>\n" +
"        <title>CRUD</title>\n" +
"        <meta charset=\"UTF-8\">\n" +
"        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n" +
"        <link rel=\"preconnect\" href=\"https://fonts.gstatic.com\">\n" +
"        <link href=\"https://fonts.googleapis.com/css2?family=Poppins:wght@200;500&display=swap\" rel=\"stylesheet\">\n" +
"        <link rel=\"preload\" href=\"./css/normalize.css\" as=\"style\">\n" +
"        <link rel=\"stylesheet\" href=\"./css/normalize.css\" >\n" +
"        <link rel=\"preload\" href=\"./css/masterstyle.css\" as=\"style\">\n" +
"        <link href=\"./css/masterstyle.css\" rel=\"stylesheet\" />\n" +
"        <link rel=\"icon\" href=\"./img/a.ico\"/>\n" +
"    </head>\n" +
"    <body>\n" +
"        <header class=\"cabezera\">\n" +
"            <h1>CRUD</h1>\n" +
"        </header>\n" +
"        <main>\n" +
"            <div class=\"menu\">\n" +
"                <nav>\n" +
"                    <a href=\"index.html\">Registrar usuario</a>\n" +
"                    <a href=\"Consulta\">Consultar usuarios</a>\n" +
"                    <a href=\"eliminar.html\">Eliminar usuairo</a>\n" +
"                    <a class=\"activo\" href=\"cambiar.html\">Cambiar datos de usuario</a>\n" +
"                </nav>\n" +
"            </div>\n" +
"            <div class=\"vista\">\n");
            try{
                
                if(! "".equals(nombre)){
                    String q = "update mregistro set nom_usu='" + nombre + "' where id_usu="+id;
                    set.executeUpdate(q);

                    System.out.println("Registro actualizado");
                    out.println("<h1>Nombre actualizado</h1>");
                }else{
                    out.println("<h1>Nombre no actualizado</h1>");
                }
                if(! "".equals(appat)){
                    String q = "update mregistro set appat_usu='" + appat + "' where id_usu="+id;
                    set.executeUpdate(q);

                    System.out.println("Registro actualizado");
                    out.println("<h1>Apellido paterno actualizado</h1>");
                }else{
                    out.println("<h1>Apellido paterno no actualizado</h1>");
                }
                if(! "".equals(apmat)){
                    String q = "update mregistro set apmat_usu='" + apmat + "' where id_usu="+id;
                    set.executeUpdate(q);

                    System.out.println("Registro actualizado");
                    out.println("<h1>Apellido materno actualizado</h1>");
                }else{
                    out.println("<h1>Apellido materno no actualizado</h1>");
                }
                if(! "".equals(correo)){
                    String q = "update mregistro set correo_usu='" + correo + "' where id_usu="+id;
                    set.executeUpdate(q);

                    System.out.println("Registro actualizado");
                    out.println("<h1>Correo actualizado</h1>");
                }else{
                    out.println("<h1>Correo no actualizado</h1>");
                }
                
            }catch(Exception e){
                
                out.println("<h1>Usuario no actualizado</h1>");
                System.out.println(e.getMessage());
                System.out.println(e.getStackTrace());
                
            }
            out.print("</div>\n" +
"        </main>\n" +
"        <footer class=\"pie\">\n" +
"            <h3>Por: Casillas Aviña Gael Emiliano</h3>\n" +
"            <h4>Grupo: 4IV8</h4>\n" +
"        </footer>\n" +
"    </body>\n" +
"</html>\n" +
"");
            
            try{
                rs.close();
                set.close();
            }catch(Exception e){
            
            }
        }
    }
    
    public void destroy(){
    
        try{
            con.close();
        }catch(Exception e){
            super.destroy();
        }
    }

    /**
     * Returns a short description of the servlet.
     *
     * @return a String containing servlet description
     */
    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>

}