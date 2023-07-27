package com.wepr.booking.dao;

import com.wepr.booking.JpaConfig.JpaConfig;
import com.wepr.booking.model.User;
import com.wepr.booking.model.User_Tour_Book;

import javax.persistence.EntityManager;
import javax.persistence.EntityTransaction;
import javax.persistence.Query;
import javax.persistence.TypedQuery;
import javax.persistence.criteria.CriteriaBuilder;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

public class UserBookTourDAO {

    public User_Tour_Book get(int userTourBookId, int userId){
        EntityManager em = JpaConfig.getEntityManagerFactory().createEntityManager();
        String query = "SELECT u FROM User_Tour_Book u WHERE u.id =:userTourBookId and u.user.id =:userId";
        TypedQuery<User_Tour_Book> q = em.createQuery(query, User_Tour_Book.class);
        q.setParameter("userTourBookId", userTourBookId);
        q.setParameter("userId", userId);
        User_Tour_Book userTourBook = new User_Tour_Book();
        try{
            userTourBook = q.getSingleResult();
        }finally {
            em.close();
        }
        return userTourBook;

    }
    public void deleteAll(String[] userTourBookIds){
        EntityManager em = JpaConfig.getEntityManagerFactory().createEntityManager();
        EntityTransaction transaction = em.getTransaction();
        String query = "DELETE FROM User_Tour_Book u WHERE u.userBookTourID IN (:userTourBookIds)";
        try{
            transaction.begin();
            List<Integer> ids = Arrays.stream(userTourBookIds).map(Integer::parseInt).collect(Collectors.toList());
            Query q = em.createQuery(query);
            q.setParameter("userTourBookIds", ids);
            q.executeUpdate();
            transaction.commit();
        }catch (Exception e){
            e.printStackTrace();
            transaction.rollback();
        }finally {
            em.close();
        }
    }
    public void delete(User_Tour_Book userTourBook){
        EntityManager em = JpaConfig.getEntityManagerFactory().createEntityManager();
        EntityTransaction transaction = em.getTransaction();
        try{
            transaction.begin();
            em.remove(em.contains(userTourBook) ? userTourBook : em.merge(userTourBook));
            transaction.commit();
        }catch (Exception e){
            e.printStackTrace();
            transaction.rollback();
        }finally {
            em.close();
        }
    }
    public void Insert(User_Tour_Book userTourBook){
        EntityManager em = JpaConfig.getEntityManagerFactory().createEntityManager();
        EntityTransaction trans = em.getTransaction();
        try{
            trans.begin();
            em.persist(userTourBook);
            trans.commit();
        }catch (Exception e){
            e.printStackTrace();
            trans.rollback();
        }finally {
            em.close();
        }
    }
    public Optional<User_Tour_Book> Get(int tourId, int userId){
        EntityManager em = JpaConfig.getEntityManagerFactory().createEntityManager();
        String queryString = "SELECT u FROM User_Tour_Book u WHERE u.tour =:tourId and u.user =: userId";
        TypedQuery<User_Tour_Book> q = em.createQuery(queryString,User_Tour_Book.class);
        List<User_Tour_Book> user_Tour_Book;
        try{
            user_Tour_Book = q.getResultList();
            if(user_Tour_Book== null || user_Tour_Book.isEmpty())
                user_Tour_Book = null;
        }finally {
            em.close();
        }
        return user_Tour_Book.stream().findFirst();
    }
    public Optional<List<User_Tour_Book>> Get(){
        EntityManager em = JpaConfig.getEntityManagerFactory().createEntityManager();
        String queryString = "SELECT u FROM User_Tour_Book u";
        TypedQuery<User_Tour_Book> q = em.createQuery(queryString,User_Tour_Book.class);
        Optional<List<User_Tour_Book>> user_Tour_Book = null;
        try{
            user_Tour_Book = Optional.ofNullable(q.getResultList());
            if(user_Tour_Book== null)
                user_Tour_Book = null;
        }finally {
            em.close();
            return user_Tour_Book;
        }

    }
    public List<User_Tour_Book> Get(User user){
        EntityManager em = JpaConfig.getEntityManagerFactory().createEntityManager();
        String queryString = "SELECT u FROM User_Tour_Book u WHERE  u.user =:user";
        TypedQuery<User_Tour_Book> q = em.createQuery(queryString,User_Tour_Book.class);
        q.setParameter("user", user);
        List<User_Tour_Book> user_Tour_Book = null;
        try{
            user_Tour_Book = q.getResultList();
            if(user_Tour_Book== null || user_Tour_Book.isEmpty())
                user_Tour_Book = null;
        }finally {
            em.close();
        }
        return user_Tour_Book;
    }
    public void Update(User_Tour_Book userTourBook){
        EntityManager em = JpaConfig.getEntityManagerFactory().createEntityManager();
        EntityTransaction trans = em.getTransaction();
        try{
            trans.begin();
            em.merge(userTourBook);
            trans.commit();
        }catch (Exception e){
            e.printStackTrace();
            trans.rollback();
        }
        finally {
            em.close();
        }
    }
}
