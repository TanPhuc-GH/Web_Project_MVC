package com.wepr.booking.controller.admin;

import com.wepr.booking.dao.TourDAO;
import com.wepr.booking.dao.TourImageDAO;
import com.wepr.booking.dao.UserBookTourDAO;
import com.wepr.booking.model.*;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import javax.swing.*;
import java.io.IOException;
import java.text.DecimalFormat;
import java.util.*;
import java.util.concurrent.atomic.AtomicReference;

@WebServlet(name = "CartController", urlPatterns = "/cart")
public class CartController extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doPost(request,response);
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        request.setCharacterEncoding("UTF-8");
        String url = "/error.jsp";
        HttpSession session = request.getSession();
        String deleteItem = request.getParameter("deleteItem");
        String[] deleteAll = request.getParameterValues("deleteAll");
        DecimalFormat decimalFormat = new DecimalFormat("###,###");
        String decimalTourPrice;
        User user = (User) session.getAttribute("user");
        Hashtable<Integer, Tour_TourBook> tourDis = null;
        url = "/cart.jsp";
        if (user != null) {
            url = "/cart.jsp";
            TourDAO tourDAO = new TourDAO();
            List<Tour> tours = tourDAO.getTour();
            UserBookTourDAO userBookTourDAO = new UserBookTourDAO();
            if (deleteItem != null){
                int userTourBookId = Integer.parseInt(deleteItem);
                UserBookTourDAO tourBook = new UserBookTourDAO();
                User_Tour_Book userTourBook = tourBook.get(userTourBookId,user.getUserID());
                tourBook.delete(userTourBook);
            }
            if (deleteAll != null && deleteAll.length > 0){
                UserBookTourDAO tourBook = new UserBookTourDAO();
                tourBook.deleteAll(deleteAll);
            }
            if(userBookTourDAO.Get().isPresent())
            {
                List<User_Tour_Book> user_tour_books = userBookTourDAO.Get().get();
                tourDis = new Hashtable<Integer, Tour_TourBook>();
                if(user_tour_books != null)
                {
                    for (User_Tour_Book user_tour_book :
                            user_tour_books) {
                        for (Tour t :
                                tours) {
                            if (user_tour_book.getTour().getTourID() == t.getTourID() && user_tour_book.getUser().getUserID() == user.getUserID() && user_tour_book.getPayment() == null) {
                                Tour_TourBook tour_tourBook = new Tour_TourBook();
                                tour_tourBook.tour = t;
                                tour_tourBook.userTourBook = user_tour_book;
                                tourDis.put(user_tour_book.getUserBookTourID(),tour_tourBook);
                            }
                        }
                    }
                }
                List<UserBookTourInfor> userBookTourInfors = new ArrayList<UserBookTourInfor>();
                //request.setAttribute("tourDis", tourDis);
                AtomicReference<Double> price = new AtomicReference<>(0.0);
                tourDis.forEach((k,v)->{
                    Double m = (v.tour.getTourPrice() * v.userTourBook.getAdultAmount()) + (v.tour.getTourPrice() * v.userTourBook.getChildAmount() / 2);
                    TourImageDAO tourImageDAO = new TourImageDAO();
                    Optional<Tour_Image> tour_image  = tourImageDAO.getImage(v.tour.getTourID());

                    UserBookTourInfor userBookTourInfor = new UserBookTourInfor();
                    userBookTourInfor.setUserBookTourId(k);
                    userBookTourInfor.setTourID(v.tour.getTourID());
                    userBookTourInfor.setTourName(v.tour.getTourName());
                    userBookTourInfor.setTourPrice(v.tour.getTourPrice());
                    userBookTourInfor.setAdult(v.userTourBook.getAdultAmount());
                    userBookTourInfor.setChild(v.userTourBook.getChildAmount());
                    userBookTourInfor.setDateDepartment(v.userTourBook.getDateDeparture());
                    userBookTourInfor.setTourImageUrl(tour_image.get().getTourImageUrl());
                    userBookTourInfor.setTourPricetoString(decimalFormat.format(userBookTourInfor.getTourPrice()));
                    userBookTourInfors.add(userBookTourInfor);
                    price.updateAndGet(v1 -> v1 + m);
                });

                String decimalAmount = decimalFormat.format(price.get());
                request.setAttribute("userBookTourInfors",userBookTourInfors);
//                request.setAttribute("amount",price);
                request.setAttribute("amount",decimalAmount);
                System.out.print(decimalAmount);
            }
        }else {
            url ="/Login.jsp";
        }

        getServletContext().getRequestDispatcher(url).forward(request,response);
    }
}
