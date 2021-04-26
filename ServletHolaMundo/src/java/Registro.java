/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import java.sql.Connection;
import java.sql.DriverManager;

import java.sql.Statement;

import java.sql.ResultSet;
import javax.servlet.ServletConfig;
/**
 *
 * @author pc
 */
public class Registro extends HttpServlet {

    /**
     * Processes requests for both HTTP <code>GET</code> and <code>POST</code>
     * methods.
     *
     * @param request servlet request peticiones por parte del cliente
     * @param response servlet response son las respuestas por parte del servidor
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    
    
    private Connection con;
    private Statement set;
    private ResultSet rs;
    
    public void init (ServletConfig cfg) throws ServletException{
        
        String url = "jdbc:mysql:3306//localhost/registro4iv7";
        
      
        String userName = "root";
        String password = "rafaellopez09";
        
        try{
            
            
            Class.forName("com.mysql.jdbc.Driver");
            //"jdbc:mysql://localhost/registro4iv7"
            
            
            con = DriverManager.getConnection(url, userName, password);
            set = con.createStatement();
            
            System.out.println("Se a conectado a la BD");
            
        }catch(Exception e ){
        
        System.out.println("No se a conectado a la BD");
        System.out.println(e.getMessage());
        System.out.println(e.getStackTrace());
        
        }   
    }
    
  
    
    
    protected void processRequest(HttpServletRequest request, 
            HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        try (PrintWriter out = response.getWriter()) {
            /* TODO output your page here. You may use following sample code. */

            //manipular los datos del formulario
            String nom, appat, appmat, correo, ip, iph;
            int edad, puerto, puertoh;

            ip = request.getLocalAddr();
            puerto = request.getLocalPort();

            iph = request.getRemoteAddr();
            puertoh = request.getRemotePort();



            nom = request.getParameter("nombre");
            appat = request.getParameter("appat");
            appmat = request.getParameter("appmat");
            correo = request.getParameter("email");

            edad = Integer.parseInt(request.getParameter("edad"));

            try{
            
            String q = "insert into Mregistro "
                    + "(nom usu, appat usu, apmat usu, edad usu, email usu)"
                    + "vaules "
                    + "('"+nom+"', '"+appat+"', '"+appmat+"', "+edad+", '"+correo+"')";
            
            set.executeUpdate(q);

            out.println("<!DOCTYPE html>");
            out.println("<html>");
            out.println("<head>");
            out.println("<title>Registro de Usuarios</title>");            
            out.println("</head>");
            out.println("<body>"
                    + "<br>Tu nombre es: " + nom);
            out.println("<br>"
                    + "Tu Apellido Paterno es:"+appat
                    + "<br>"
                    + "Tu Apellido Materno es:"+appmat
                    + "<br>"
                    + "Tu Edad es:"+edad
                    + "<br>"
                    + "Tu correo electronico es:"+correo
                    + "<br>");
            out.println("<h1>Registro Exitoso</h1>"
                    + "<br>"
                    + "La IP Local es: "+ip
                    + "<br>"
                    + "La IP del host: "+iph
                    + "<br>"
                    + "Puerto Local: " + puerto
                    + "<br>"
                    + "Puerto Host:" + puertoh
                    + "<br>"
                    + "<a href='index.html'>Regresar al Formulario</a>");
            out.println("</body>");
            out.println("</html>");
            
            System.out.println("Datos Registrados en la tabla");
            
            }catch(Exception e ){
                
                System.out.println("No se Registrarom los datos en la tabla");
                System.out.println(e.getMessage());
                System.out.println(e.getStackTrace());
                out.println("<!DOCTYPE html>");
                out.println("<html>");
                out.println("<head>");
                out.println("<title>Registro de Usuarios</title>");            
                out.println("</head>");
                out.println("<body>"
                        + "<h1>No se pudo registrar, hubo un error</h1>"
                        + "<a href='index.html'>Regresar al Formulario</a>");
            out.println("</body>");
            out.println("</html>");
                
            }
        }
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
        processRequest(request, response);
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
        processRequest(request, response);
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